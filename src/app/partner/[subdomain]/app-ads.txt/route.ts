import { NextResponse } from 'next/server';

const INCEPTION_ADS = `google.com, pub-9094493509224480, DIRECT, f08c47fec0942fa0
google.com, pub-1769069287755493, DIRECT, f08c47fec0942fa0
google.com, pub-1618961855010776, DIRECT, f08c47fec0942fa0
facebook.com, 243436602121767, DIRECT, c3e20eee3f780d68
google.com, pub-5922524692564542, DIRECT, f08c47fec0942fa0
google.com, pub-5457807375754173, DIRECT, f08c47fec0942fa0
facebook.com, 574348525670517, DIRECT, c3e20eee3f780d68
facebook.com, 2404577806590224, DIRECT, c3e20eee3f780d68
#famz
facebook.com, 1513178796088195, DIRECT, c3e20eee3f780d68
vungle.com, 6602814a5e79b800114ac41f, DIRECT, c107d686becd2d77
facebook.com, 1275721507343225, DIRECT, c3e20eee3f780d68`;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ subdomain: string }> }
) {
  const { subdomain: rawSubdomain } = await params;
  const subdomain = rawSubdomain?.toLowerCase();

  let content = "";

  if (subdomain === "inception") {
    content = INCEPTION_ADS;
  } else {
    // Default fallback if a partner doesn't have an app-ads.txt configured yet
    content = "# No app-ads.txt configured for this subdomain.";
  }

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
