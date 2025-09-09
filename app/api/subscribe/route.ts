import { NextResponse } from 'next/server';

export async function POST() {
  // Connect to your ESP (Mailchimp, ConvertKit, etc.) here
  return NextResponse.json({ ok: true });
}
