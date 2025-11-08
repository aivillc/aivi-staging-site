import { NextResponse } from 'next/server';

// Helper endpoint to list all workspace members and their IDs
// Access via: /api/slack/list-members
export async function GET() {
  try {
    const slackBotToken = process.env.SLACK_BOT_TOKEN;
    
    if (!slackBotToken) {
      return NextResponse.json({ error: 'SLACK_BOT_TOKEN not configured' }, { status: 500 });
    }

    // Fetch all users in the workspace
    const response = await fetch('https://slack.com/api/users.list', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${slackBotToken}`,
      },
    });

    const data = await response.json();

    if (!data.ok) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    // Filter out bots and deleted users, format for easy reading
    const members = data.members
      .filter((member: any) => !member.is_bot && !member.deleted)
      .map((member: any) => ({
        id: member.id,
        name: member.name,
        realName: member.real_name,
        email: member.profile?.email || 'N/A',
        title: member.profile?.title || 'N/A',
      }));

    return NextResponse.json({
      success: true,
      count: members.length,
      members,
      instruction: 'Copy the User IDs you want to invite and add them to SLACK_TEAM_MEMBER_IDS environment variable (comma-separated)',
    });

  } catch (error) {
    console.error('❌ Error listing Slack members:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
