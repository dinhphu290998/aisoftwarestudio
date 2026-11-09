import { NextResponse } from 'next/server';
import { getAllStudioApps, fetchDeveloperApps } from '@/lib/playstore';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const devId = searchParams.get('devId');
    const refresh = searchParams.get('refresh') === 'true' || searchParams.get('refresh') === '1';

    if (devId) {
      const apps = await fetchDeveloperApps(devId);
      return NextResponse.json({
        success: true,
        count: apps.length,
        updatedAt: new Date().toISOString(),
        apps
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
        }
      });
    }

    const apps = await getAllStudioApps(refresh);
    return NextResponse.json({
      success: true,
      count: apps.length,
      updatedAt: new Date().toISOString(),
      apps
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (error: any) {
    console.error('Error in /api/apps:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
