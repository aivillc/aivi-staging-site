import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { sessionId, initialMessage, conversationHistory, sessionData } = await request.json();

    console.log('🔨 [Create Channel] Request received');
    console.log('   SessionId:', sessionId);
    console.log('   Session Data received:', JSON.stringify(sessionData, null, 2));
    console.log('   Session Data keys:', Object.keys(sessionData || {}));

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId is required' }, { status: 400 });
    }

    const slackBotToken = process.env.SLACK_BOT_TOKEN;
    if (!slackBotToken) {
      console.error('❌ SLACK_BOT_TOKEN not configured');
      return NextResponse.json({ error: 'Slack not configured' }, { status: 500 });
    }

    // Team members to invite (comma-separated User IDs in environment variable)
    const teamMemberIds = process.env.SLACK_TEAM_MEMBER_IDS?.split(',').map(id => id.trim()) || [];

    // Create channel name (Slack channels must be lowercase, no spaces)
    const channelName = `aivi-session-${sessionId.toLowerCase().replace(/[^a-z0-9-_]/g, '')}`;

    console.log('🔨 Creating Slack channel:', channelName);
    console.log('👥 Team members to invite:', teamMemberIds.length > 0 ? teamMemberIds : 'None configured');

    // Create the channel
    const createChannelResponse = await fetch('https://slack.com/api/conversations.create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${slackBotToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: channelName,
        is_private: false,
      }),
    });

    const createChannelData = await createChannelResponse.json();

    if (!createChannelData.ok) {
      // Channel might already exist
      if (createChannelData.error === 'name_taken') {
        console.log('⚠️ Channel already exists:', channelName);
        
        // Get existing channel ID
        const listResponse = await fetch('https://slack.com/api/conversations.list', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${slackBotToken}`,
          },
        });
        
        const listData = await listResponse.json();
        const existingChannel = listData.channels?.find((ch: any) => ch.name === channelName);
        
        if (existingChannel) {
          return NextResponse.json({
            success: true,
            channelId: existingChannel.id,
            channelName,
            alreadyExists: true,
          });
        }
      }

      console.error('❌ Failed to create Slack channel:', createChannelData.error);
      return NextResponse.json({ error: createChannelData.error }, { status: 500 });
    }

    const channelId = createChannelData.channel.id;
    console.log('✅ Slack channel created:', channelName, channelId);

    // Invite team members to the channel
    if (teamMemberIds.length > 0) {
      try {
        console.log('👥 Inviting team members:', teamMemberIds);

        const inviteResponse = await fetch('https://slack.com/api/conversations.invite', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${slackBotToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            channel: channelId,
            users: teamMemberIds.join(','),
          }),
        });

        const inviteData = await inviteResponse.json();
        
        if (inviteData.ok) {
          console.log('✅ Team members invited to channel');
          
          // Send a friendly join notification to the user via messages API
          // Map Nick's User ID to his name
          if (teamMemberIds.includes('U09Q7M0AETV')) {
            const baseUrl = process.env.VERCEL_URL 
              ? `https://${process.env.VERCEL_URL}`
              : 'http://localhost:3000';

            const joinMessagePayload = {
              sessionId,
              message: '👋 Nick has joined the chat',
              sender: 'bot',
              timestamp: Date.now(),
            };

            // Send join notification to chatbot
            await fetch(`${baseUrl}/api/chat/messages`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(joinMessagePayload),
            });
          }
        } else {
          console.error('⚠️ Failed to invite some team members:', inviteData.error);
        }
      } catch (error) {
        console.error('⚠️ Error inviting team members:', error);
        // Continue even if invitation fails
      }
    }

    // Post initial context to the channel
    let contextMessage = `🤖 *New Agent Request*\n\n`;
    contextMessage += `*Session ID:* ${sessionId}\n`;
    contextMessage += `*Time:* ${new Date().toLocaleString()}\n\n`;
    
    // Add session data (user information)
    if (sessionData && Object.keys(sessionData).length > 0) {
      contextMessage += `*User Information:*\n`;
      if (sessionData.name) contextMessage += `*Name:* ${sessionData.name}\n`;
      if (sessionData.email) contextMessage += `*Email:* ${sessionData.email}\n`;
      if (sessionData.phone) contextMessage += `*Phone:* ${sessionData.phone}\n`;
      if (sessionData.businessName) contextMessage += `*Business:* ${sessionData.businessName}\n`;
      if (sessionData.industry) contextMessage += `*Industry:* ${sessionData.industry}\n`;
      if (sessionData.country) contextMessage += `*Country:* ${sessionData.country}\n`;
      
      // Form data
      if (sessionData.challenge) contextMessage += `*Challenge:* ${sessionData.challenge}\n`;
      if (sessionData.channels) {
        const channelsStr = Array.isArray(sessionData.channels) 
          ? sessionData.channels.join(', ') 
          : sessionData.channels;
        contextMessage += `*Channels:* ${channelsStr}\n`;
      }
      if (sessionData.volume) contextMessage += `*Monthly Volume:* ${sessionData.volume}\n`;
      if (sessionData.goal) contextMessage += `*Goal:* ${sessionData.goal}\n`;
      if (sessionData.crm) contextMessage += `*CRM:* ${sessionData.crm}\n`;
      if (sessionData.additionalNotes) contextMessage += `*Notes:* ${sessionData.additionalNotes}\n`;
      
      contextMessage += `\n`;
    }
    
    if (initialMessage) {
      contextMessage += `*User's Request:*\n> ${initialMessage}\n\n`;
    }

    if (conversationHistory && conversationHistory.length > 0) {
      contextMessage += `*Recent Conversation:*\n`;
      conversationHistory.slice(-5).forEach((msg: any) => {
        const sender = msg.sender === 'user' ? '👤 User' : '🤖 Bot';
        const messageText = msg.text || msg.message || 'No message';
        contextMessage += `\n${sender}: ${messageText}`;
      });
    }

    contextMessage += `\n\n_Type your message below to chat with the user. Messages will appear in their chatbot._`;

    // Post context to channel
    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${slackBotToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: channelId,
        text: contextMessage,
        mrkdwn: true,
      }),
    });

    return NextResponse.json({
      success: true,
      channelId,
      channelName,
      message: 'Channel created and agent notified',
    });

  } catch (error) {
    console.error('❌ Error creating Slack channel:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
