import { NextResponse } from 'next/server';
import { AFFICA_ADS } from '@/app/partner/[subdomain]/app-ads.txt/route';

export async function GET() {
  return new NextResponse(AFFICA_ADS, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
