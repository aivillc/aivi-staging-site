import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { sessionId, initialMessage, conversationHistory } = await request.json();

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

    if (process.env.NODE_ENV === 'development') {
      console.log('🔨 Creating Slack channel:', channelName);
    }

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
        if (process.env.NODE_ENV === 'development') {
          console.log('👥 Inviting team members:', teamMemberIds);
        }

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
    
    if (initialMessage) {
      contextMessage += `*User's Request:*\n> ${initialMessage}\n\n`;
    }

    if (conversationHistory && conversationHistory.length > 0) {
      contextMessage += `*Recent Conversation:*\n`;
      conversationHistory.slice(-5).forEach((msg: any) => {
        const sender = msg.sender === 'user' ? '👤 User' : '🤖 Bot';
        contextMessage += `\n${sender}: ${msg.message}`;
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
