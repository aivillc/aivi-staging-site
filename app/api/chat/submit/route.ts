import { NextRequest, NextResponse } from 'next/server';

// Prospects submit API disabled per request. Return 404 to indicate removed.
export async function POST(_request: NextRequest) {
  return NextResponse.json({ error: 'Chat submit API disabled' }, { status: 404 });
}
