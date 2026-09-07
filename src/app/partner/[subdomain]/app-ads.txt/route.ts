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

const AMOBEAR_ADS = `google.com, pub-1932904583211332, DIRECT, f08c47fec0942fa0
facebook.com, 411776127249763, DIRECT, c3e20eee3f780d68`;

const UNISOFT_ADS = `facebook.com, 411776127249763, DIRECT, c3e20eee3f780d68
google.com, pub-4226576672608638, DIRECT, f08c47fec0942fa0`;

const ONETABB_ADS = `google.com, pub-4664159291930779, DIRECT, f08c47fec0942fa0

# Meta Audience Network
facebook.com, 1554061462519613, RESELLER, c3e20eee3f780d68

# Pangle
pangleglobal.com, 5037889, DIRECT
pubmatic.com, 161490, RESELLER, 5d62403b186f2ace`;

const AFFICA_ADS = `google.com, pub-2843552789470483, DIRECT, f08c47fec0942fa0
facebook.com, 848223676623042, DIRECT, c3e20eee3f780d68
vungle.com, 6524f826b3ff7d001153c80a, DIRECT, c107d686becd2d77`;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ subdomain: string }> }
) {
  const { subdomain: rawSubdomain } = await params;
  const subdomain = rawSubdomain?.toLowerCase();

  let content = "";

  if (subdomain === "inception") {
    content = INCEPTION_ADS;
  } else if (subdomain === "amobear") {
    content = AMOBEAR_ADS;
  } else if (subdomain === "unisoft") {
    content = UNISOFT_ADS;
  } else if (subdomain === "1tabb") {
    content = ONETABB_ADS;
  } else if (subdomain === "affica") {
    content = AFFICA_ADS;
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
