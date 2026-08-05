import { NextResponse } from 'next/server';
import { fetchDeveloperApps } from '@/lib/playstore';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const devId = searchParams.get('devId');

  if (!devId) {
    return NextResponse.json({ error: 'devId is required' }, { status: 400 });
  }

  const apps = await fetchDeveloperApps(devId);
  return NextResponse.json({ apps });
}
