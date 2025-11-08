import { NextRequest, NextResponse } from 'next/server';

// Chat API has been disabled per request. Return 404 for all methods.
export async function POST(_request: NextRequest) {
  return NextResponse.json({ error: 'Chat API disabled' }, { status: 404 });
}

export async function GET(_request: NextRequest) {
  return NextResponse.json({ error: 'Chat API disabled' }, { status: 404 });
}
