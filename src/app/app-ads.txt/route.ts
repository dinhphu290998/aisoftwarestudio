import { NextResponse } from 'next/server';

const APP_ADS_CONTENT = `google.com, pub-9313115044909284, DIRECT, f08c47fec0942fa0`;

export async function GET() {
  return new NextResponse(APP_ADS_CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
