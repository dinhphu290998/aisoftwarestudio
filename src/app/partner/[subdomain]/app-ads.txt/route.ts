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
vungle.com, 6524f826b3ff7d001153c80a, DIRECT, c107d686becd2d77
pokkt.com, 6246, RESELLER, c45702d9311e25fd
programmaticx.ai, 84448, RESELLER, b42d42eb28400efa
sharethrough.com, SniqCOMC, RESELLER, d53b998a7bd4ecd2
sharethrough.com, 5828, RESELLER, d53b998a7bd4ecd2
sharethrough.com, UvcAx8IL, RESELLER, d53b998a7bd4ecd12
sharethrough.com, 3713, RESELLER, d53b998a7bd4ecd2
sharethrough.com, 5294, RESELLER, d53b998a7bd4ecd2
sharethrough.com, 4568, RESELLER, d53b998a7bd4ecd2
brightcom.com, 23120, RESELLER
insticator.com, cadff748-965f-4393-a76e-a8f902512bad, RESELLER, b3511ffcafb23a32
nativo.com, 5958, RESELLER, 59521ca7cc5e9fee
nativo.com, 6089, RESELLER, 59521ca7cc5e9fee
vidoomy.com, 8953515, RESELLER
google.com, pub-1682595508078257, RESELLER, f08c47fec0942fa0
google.com, pub-2923085774557613, RESELLER, f08c47fec0942fa0
google.com, pub-5060663379040713, RESELLER, f08c47fec0942fa0
google.com, pub-3990748024667386, RESELLER, f08c47fec0942fa0
lijit.com, 528770, RESELLER, fafdf38b16bf6b2b
lijit.com, 606973, RESELLER, fafdf38b16bf6b2b
prado.co, 14260, RESELLER
zetaglobal.net, 525, RESELLER
ogury.com, 065d4ff5-a269-44be-9634-9d4d7af2dfc3, RESELLER
smartadserver.com, 4525, RESELLER, 060d053dcf45cbf3
smartadserver.com, 4610, RESELLER, 060d053dcf45cbf3
smartadserver.com, 5828, RESELLER, 060d053dcf45cbf3
smartadserver.com, 4578, RESELLER, 060d053dcf45cbf3
smartadserver.com, 4625, RESELLER, 060d053dcf45cbf3
smartadserver.com, 5294, RESELLER, 060d053dcf45cbf3
smartadserver.com, 4456, RESELLER
smartadserver.com, 3964, RESELLER
undertone.com, 4108, RESELLER
voisetech.com, 1066, RESELLER
improvedigital.com, 2297, RESELLER
improvedigital.com, 2464, RESELLER
kidoz.net, 14260, RESELLER, a109366414b7335e
kidoz.net, 15467, RESELLER, a109366414b7335e
rubiconproject.com, 17328, RESELLER, 0bfd66d529a55807
rubiconproject.com, 24400, RESELLER, 0bfd66d529a55807
rubiconproject.com, 17062, RESELLER, 0bfd66d529a55807
rubiconproject.com, 25336, RESELLER, 0bfd66d529a55807
rubiconproject.com, 24600, RESELLER, 0bfd66d529a55807
rubiconproject.com, 20014, RESELLER, 0bfd66d529a55807
rubiconproject.com, 17608, RESELLER, 0bfd66d529a55807
rubiconproject.com, 20744, RESELLER, 0bfd66d529a55807
rubiconproject.com, 25978, RESELLER, 0bfd66d529a55807
rubiconproject.com, 28341, RESELLER, 0bfd66d529a55807
rubiconproject.com, 22412, RESELLER, 0bfd66d529a55807
rubiconproject.com, 24752, RESELLER, 0bfd66d529a55807
rubiconproject.com, 24084, RESELLER, 0bfd66d529a55807
rubiconproject.com, 15268, RESELLER, 0bfd66d529a55807
rubiconproject.com, 25060, RESELLER, 0bfd66d529a55807
rubiconproject.com, 28169, RESELLER, 0bfd66d529a55807
triplelift.com, 14798, RESELLER, 6c33edb13117fd86
triplelift.com, 14127, RESELLER, 6c33edb13117fd86
triplelift.com, 12908, RESELLER, 6c33edb13117fd86
triplelift.com, 14705, RESELLER, 6c33edb13117fd86
triplelift.com, 14705-EB, RESELLER
triplelift.com, 6998, RESELLER, 6c33edb13117fd86
triplelift.com, 14709, RESELLER, 6c33edb13117fd86
triplelift.com, 13883, RESELLER, 6c33edb13117fd86
triplelift.com, 12158, RESELLER, 6c33edb13117fd86
triplelift.com, 14594, RESELLER, 6c33edb13117fd86
triplelift.com, 14716, RESELLER, 6c33edb13117fd86
videoheroes.tv, 212499, RESELLER, 064bc410192443d8
connekt.ai, 5585919044, RESELLER
odeeo.io, 118848844, RESELLER, 36cfd73091d5c3fc
playwire.com, 1018531, RESELLER
spinx.biz, 1373698903, RESELLER, 9f2711e9aaa9f992
zmaticoo.com, 5135195, RESELLER
media.net, 8CUSC3UJ7, RESELLER
media.net, 8CUUQ286L, RESELLER
media.net, 8CU9B72O6, RESELLER
media.net, 8CUH46N56, RESELLER
media.net, 8CU5L226O, RESELLER
media.net, 8CAXEGFDP, RESELLER
media.net, 8CU675N41, RESELLER
pubnative.net, 1009458, RESELLER, d641df8625486a7b
start.io, 197760873, RESELLER
themediagrid.com, B8N9YH, RESELLER, 35d5010d7789b49d
themediagrid.com, FALINO, RESELLER, 9fac4a4a87c2a44f
themediagrid.com, JVHG38, RESELLER, 9fac4a4a87c2a44f
brightmountainmedia.com, 2686958, RESELLER
conversantmedia.com, 41024, RESELLER, 03113cd04947736d
freewheel.tv, 741650, RESELLER
smaato.com, 1100059563, RESELLER, 07bcf65f187117b4
smaato.com, 1100058938, RESELLER, 07bcf65f187117b4
smaato.com, 1100047589, RESELLER, 07bcf65f187117b4
smaato.com, 1100055750, RESELLER, 07bcf65f187117b4
taurusx.com, 70097, RESELLER
xandr.com, 7353, RESELLER
xandr.com, 17779, RESELLER
xandr.com, 13799, RESELLER
e-planning.net, 79ded3cfca3d3b78, RESELLER, c1ba615865ed87b2
e-planning.net, 6a7f877127485fdb, RESELLER, c1ba615865ed87b2
onlinemediasolutions.com, 23120, RESELLER, b3868b187e4b6402
targetbetter.com, 82228, RESELLER
thebrave.io, 1234634, RESELLER, c25b2154543746ac
appnexus.com, 6849, RESELLER
appnexus.com, 11826, RESELLER, f5ab79cb980f11d1
appnexus.com, 14230, RESELLER, f5ab79cb980f11d1
appnexus.com, 17779, RESELLER
copper6.com, 766114, RESELLER
unity.com, 8948656, DIRECT, 96cabb5fbdde37a7
vidazoo.com, 6a3384a48eca8f6ddad62520, RESELLER, b6ada874b4d7d0b2
netmarvel.com, 1011828, RESELLER, ca3509163a633862
bid-matrix.com, f2c71a45ea149366, RESELLER
loopme.com, 11463, RESELLER, 6c8d5f95897a5a3b
loopme.com, 20775, RESELLER, 6c8d5f95897a5a3b
loopme.com, 2896, RESELLER, 6c8d5f95897a5a3b
loopme.com, 9621, RESELLER, 6c8d5f95897a5a3b
openx.com, 561446248, RESELLER, 6a698e2ec38604c6
openx.com, 562174952, RESELLER, 6a698e2ec38604c6
openx.com, 537153564, RESELLER, 6a698e2ec38604c6
openx.com, 540393169, RESELLER, 6a698e2ec38604c6
openx.com, 563905670, RESELLER, 6a698e2ec38604c6
openx.com, 565175463, RESELLER, 6a698e2ec38604c6
openx.com, 559792583, RESELLER, 6a698e2ec38604c6
stroeer.com, 17379, RESELLER
thunder-monetize.com, 2158729563, RESELLER
video.unrulymedia.com, 657436911, RESELLER
video.unrulymedia.com, 389957698, RESELLER
video.unrulymedia.com, 144138083, RESELLER
video.unrulymedia.com, 947824792, RESELLER
video.unrulymedia.com, 703273072, RESELLER
video.unrulymedia.com, 201313863, RESELLER
pubmatic.com, 167188, RESELLER, 5d62403b186f2ace
pubmatic.com, 95054, RESELLER, 5d62403b186f2ace
pubmatic.com, 160145, RESELLER, 5d62403b186f2ace
pubmatic.com, 159906, RESELLER, 5d62403b186f2ace
pubmatic.com, 165750, RESELLER, 5d62403b186f2ace
pubmatic.com, 165438, RESELLER, 5d62403b186f2ace
pubmatic.com, 166385, RESELLER, 5d62403b186f2ace
pubmatic.com, 165854, RESELLER, 5d62403b186f2ace
pubmatic.com, 160456, RESELLER, 5d62403b186f2ace
pubmatic.com, 161151, RESELLER, 5d62403b186f2ace
pubmatic.com, 158154, RESELLER, 5d62403b186f2ace
pubmatic.com, 167130, RESELLER, 5d62403b186f2ace
pubmatic.com, 160318, RESELLER, 5d62403b186f2ace
pubmatic.com, 168244, RESELLER, 5d62403b186f2ace
pubmatic.com, 159501, RESELLER, 5d62403b186f2ace
pubmatic.com, 163117, RESELLER, 5d62403b186f2ace
smartclip.net, 14679, RESELLER
smartclip.net, 15458, RESELLER
verve.com, 1008379, RESELLER, 0c8f5958fc2d6270
bold-win.com, 1189, RESELLER, 71746737d0bab951
bigo.sg, adidz3dyfp, RESELLER
ignitemediatech.com, pub_11115, RESELLER
opera.com, pub6148735850944, RESELLER, 55a0c5fd61378de3
toponad.com, 165535463cfb70, RESELLER, 1d49fe424a1a456d
appads.in, 106246, RESELLER
bluexad.ai, 1996418805747683328, RESELLER
dauup.com, 34222, RESELLER, 4daba13e2b0dfd9
indexexchange.com, 214183, RESELLER, 50b1c356f2c5c8fc
lunamedia.io, 2fdb16a1-5025-4c41-9b17-e01e47ebc8b4, RESELLER, 524ecb396915caaf
mintegral.com, 40889, DIRECT, 0aeed750c80d6423
toponad.com, 16385e313a271a, RESELLER, 1d49fe424a1a456d
indexexchange.com, 191497, RESELLER, 50b1c356f2c5c8fc
appnexus.com, 11450, RESELLER, f5ab79cb980f11d1
indexexchange.com, 194974, RESELLER, 50b1c356f2c5c8fc
axonix.com, 59054, RESELLER, bc385f2b4a87b721
programmaticx.ai, 6845438, RESELLER
themediagrid.com, B8N9YH, RESELLER, 35d5010d7789b49d
appnexus.com, 12941, RESELLER, f5ab79cb980f11d1
appnexus.com, 12752, RESELLER, f5ab79cb980f11d1
appnexus.com, 12969, RESELLER, f5ab79cb980f11d1
contextweb.com, 562794, RESELLER, 89ff185a4c4e857c
advertising.com, 23089, RESELLER
advertising.com, 28605, RESELLER
appnexus.com, 12637, RESELLER, f5ab79cb980f11d1
appnexus.com, 9382, RESELLER, f5ab79cb980f11d1
google.com, pub-6346866704322274, RESELLER, f08c47fec0942fa0
google.com, pub-3565385483761681, RESELLER, f08c47fec0942fa0
google.com, pub-5717092533913515, RESELLER, f08c47fec0942fa0
pubmatic.com, 159277, RESELLER, 5d62403b186f2ace
pubmatic.com, 161335, RESELLER, 5d62403b186f2ace
pubmatic.com, 160993, RESELLER, 5d62403b186f2ace
rubiconproject.com, 13918, RESELLER, 0bfd66d529a55807
synacor.com, 82171, RESELLER, e108f11b2cdf7d5b
yahoo.com, 59244, RESELLER
Improvedigital.com, 1699, RESELLER
openx.com, 543878511, RESELLER, 6a698e2ec38604c6
bidease.com, bidease_seller_34, RESELLER
tredio.io, 357a6fdf7642bf815a88822c447d9dc433546, RESELLER
video.unrulymedia.com, 819070080, RESELLER
bold-win.com, 807, RESELLER, 71746737d0bab951
flat-ads.com, 2196901, RESELLER
lijit.com, 500520, RESELLER, fafdf38b16bf6b2b
video.unrulymedia.com, 949394431, RESELLER
appaspire.com, 97517, RESELLER
contextweb.com, 563195, RESELLER, 89ff185a4c4e857c
smaato.com, 1100056110, RESELLER, 07bcf65f187117b4
ylhglobal.com, 1930587443, RESELLER
video.unrulymedia.com, 827123801, RESELLER
toponad.com, 1661f80179644e, RESELLER, 1d49fe424a1a456d
onetag.com, 8668c16092f01e8, RESELLER
e-planning.net, 79686787743ddfc5, RESELLER, c1ba615865ed87b2
playwire.com, 1025119, RESELLER
thunder-monetize.com, 1125520627, RESELLER
rhythmone.com, 689559416, RESELLER, a670c89d4a324e47
lijit.com, 411121, RESELLER, fafdf38b16bf6b2b #SOVRN
conversantmedia.com, 100569, RESELLER, 03113cd04947736d
taurusx.com, 80609, RESELLER
webeyemob.com, 80609, RESELLER
caerulus.io, 3320-44758, RESELLER
zetaglobal.net, 681, RESELLER
improvedigital.com, 2451, RESELLER
sharethrough.com, UbYLkrys, RESELLER, d53b998a7bd4ecd2
sharethrough.com, g4qXILSV, RESELLER, d53b998a7bd4ecd2
thunder-monetize.com, 5016320847, RESELLER
thunder-monetize.com, 8227779878, RESELLER
thunder-monetize.com, 4116628010, RESELLER
thunder-monetize.com, 2626756011, RESELLER
thunder-monetize.com, 6394460651, RESELLER
thunder-monetize.com, 9214052224, RESELLER
thunder-monetize.com, 5102475972, RESELLER
thunder-monetize.com, 9347471687, RESELLER
thunder-monetize.com, 3879160930, RESELLER
thunder-monetize.com, 7169228962, RESELLER
thunder-monetize.com, 9326167394, RESELLER
thunder-monetize.com, 3199604937, RESELLER
thunder-monetize.com, 6124986497, RESELLER
connatix.com, 1713048496211545, RESELLER, 2af98acdee0e81ed
themediagrid.com, R28I9J, RESELLER, 35d5010d7789b49d
rhebus.works, 9347471687, RESELLER
thunder-monetize.com, 6329293809, RESELLER
thunder-monetize.com, 3018968091, RESELLER
thunder-monetize.com, 1858090629, RESELLER
thunder-monetize.com, 5462031088, RESELLER
thunder-monetize.com, 4586080114, RESELLER
thunder-monetize.com, 8534885299, RESELLER
thunder-monetize.com, 7373737053, RESELLER
thunder-monetize.com, 9630185716, RESELLER
thunder-monetize.com, 1257832012, RESELLER
thunder-monetize.com, 3081642139, RESELLER
thunder-monetize.com, 3797245630, RESELLER
thunder-monetize.com, 5714748458, RESELLER
thunder-monetize.com, 6268002838, RESELLER
thunder-monetize.com, 7213903648, RESELLER
thunder-monetize.com, 6747258203, RESELLER
thunder-monetize.com, 2158729563, RESELLER
thunder-monetize.com, 8888198173, RESELLER
thunder-monetize.com, 9653037459, RESELLER
thunder-monetize.com, 4306738719, RESELLER
thunder-monetize.com, 8432987942, RESELLER
thunder-monetize.com, 1947298216, RESELLER
thunder-monetize.com, 8764970206, RESELLER
thunder-monetize.com, 1933963830, RESELLER
thunder-monetize.com, 9153035698, RESELLER
thunder-monetize.com, 5803687805, RESELLER
video.unrulymedia.com, 906352066, RESELLER
pubmatic.com, 159382, RESELLER
pubmatic.com, 161058, RESELLER, 5d62403b186f2ace
inmobi.com, ba5fd3fb82c5412989b23c3eec71baf7, RESELLER, 83e75a7ae333ca9d
loopme.com, 9718, RESELLER, 6c8d5f95897a5a3b
yeahmobi.com, 114490, RESELLER
zmaticoo.com, 114490, RESELLER
adingo.jp, 31054, RESELLER
singularads.com, 548745, RESELLER
yieldmo.com, 3591550211052216798, RESELLER, 6a92c77cfc3d2258
App-stock.com, 558223, Reseller, ed8c126ea5971415
contextweb.com, 563321, RESELLER, 89ff185a4c4e857c
smaato.com, 1100057628, RESELLER, 07bcf65f187117b4
triplelift.com, 12240, RESELLER, 6c33edb13117fd86
sonobi.com, d2b13d1c36, RESELLER, d1a215d9eb5aee9e
smartadserver.com, 5026, RESELLER, 060d053dcf45cbf3
equativ.com, 5026, RESELLER, 060d053dcf45cbf3
pubmatic.com, 164119, RESELLER, 5d62403b186f2ace
contextweb.com, 563539, RESELLER, 89ff185a4c4e857c
onetag.com, 8dd92b4434e684b, RESELLER
e-planning.net, 1bf7b5d803f178c4, RESELLER, c1ba615865ed87b2
onetag.com, 8df76ed1d09d55e, RESELLER
consumable.com, 2001585, RESELLER, aefcd3d2f45b5070
adswizz.com, 561, RESELLER
zetaglobal.net, 815, RESELLER
sabio.us, 100092, reseller, 96ed93aaa9795702
freewheel.tv, 1606620, reseller
freewheel.tv, 1606633, reseller
lijit.com, 465542, RESELLER, fafdf38b16bf6b2b
themediagrid.com, A6CWLO, RESELLER, 35d5010d7789b49d
admatic.com.tr, adm-pub-3033566192, RESELLER, uufps1dh5stc6euk
rubiconproject.com, 25100, RESELLER, 0bfd66d529a55807
contextweb.com, 562911, RESELLER, 89ff185a4c4e857c
improvedigital.com, 2276, RESELLER
pubmatic.com, 165340, RESELLER, 5d62403b186f2ace
yeahmobi.com, 104752, RESELLER
e-planning.net, ec771b05828a67fa, RESELLER, c1ba615865ed87b2
richaudience.com, 9komJKwMhZ, RESELLER
lijit.com, 530498, RESELLER, fafdf38b16bf6b2b
showheroes.com, 6031, RESELLER
smartclip.net, 27985, RESELLER
lijit.com, 380632, RESELLER, fafdf38b16bf6b2b
krushmedia.com, AJxF6R192a9M6CaTvK, RESELLER
conversantmedia.com, 100863, RESELLER, 03113cd04947736d
appaspire.com, 97515, RESELLER
rubiconproject.com, 26694, RESELLER, 0bfd66d529a55807
pubmatic.com, 165702, RESELLER, 5d62403b186f2ace
pubmatic.com, 165701, RESELLER, 5d62403b186f2ace
inmobi.com, 6cb2de20b77b4011911f2df29e4674a0, RESELLER, 83e75a7ae333ca9d
contextweb.com, 563462, RESELLER, 89ff185a4c4e857c
atasdigital.com, 506154, RESELLER
uis.mobfox.com, 2206, RESELLER, 5529a3d1f59865be
singularads.com, 445896, RESELLER
triplelift.com, 13792, RESELLER, 6c33edb13117fd86
lijit.com, 528054, RESELLER, fafdf38b16bf6b2b
smaato.com, 1100056344, RESELLER, 07bcf65f187117b4
openx.com, 538959099, RESELLER, 6a698e2ec38604c6
smartadserver.com, 4926, RESELLER, 060d053dcf45cbf3
contextweb.com, 563601, RESELLER, 89ff185a4c4e857c
pubnative.net, 1009988, RESELLER, d641df8625486a7b
pubmatic.com, 161368, RESELLER, 5d62403b186f2ace
improvedigital.com, 2505, RESELLER
sovrn.com, 500520, RESELLER, fafdf38b16bf6b2b
zetaglobal.com, 815, RESELLER
ssp.zetaglobal.net, 815, RESELLER
ucfunnel.com, par-E2B3A33EAA4286BEF7ADD9AA28A922D2, RESELLER
aralego.com, par-E2B3A33EAA4286BEF7ADD9AA28A922D2, RESELLER
adiiix.com, db716a4c, RESELLER
rubiconproject.com, 25482, RESELLER, 0bfd66d529a55807
mgid.com, 885240, RESELLER, d4c29acad76ce94f
rubiconproject.com, 26552, RESELLER
admixer.co.kr, 1289, RESELLER
contextweb.com, 563521, RESELLER, 89ff185a4c4e857c
rubiconproject.com, 15044, RESELLER, 0bfd66d529a55807
admanmedia.com, 2248, RESELLER
improvedigital.com, 2508, RESELLER
improvedigital.com, 2509, RESELLER
pubnative.net, 1010067, RESELLER, d641df8625486a7b
pubnative.net, 1010068, RESELLER, d641df8625486a7b
pubnative.net, 1010069, RESELLER, d641df8625486a7b
pubnative.net, 1010070, RESELLER, d641df8625486a7b
pubnative.net, 1010071, RESELLER, d641df8625486a7b
pubnative.net, 1010072, RESELLER, d641df8625486a7b
pubnative.net, 1010073, RESELLER, d641df8625486a7b
connekt.ai, 2852512, RESELLER
adyoulike.com, e48120b055ac0abcc41c0093bf3fe02e, RESELLER
lijit.com, 543478, RESELLER, fafdf38b16bf6b2b
bidmachine.io, 896, RESELLER
video.unrulymedia.com, 557688749, RESELLER
openx.com, 540396775, RESELLER, 6a698e2ec38604c6
xandr.com, 13293, RESELLER, f5ab79cb980f11d1
inmobi.com, 95e2b3b059d64b2c97e4cf8dc2b15796, RESELLER, 83e75a7ae333ca9d
appsheep.com, 27dee787560b471cafde1e55d87bc75b, RESELLER
appsheep.com, 225239742b9b4299988a6ac86d11f752, RESELLER
appsheep.com, c34528d5387e44158367ab905d2df86a, RESELLER
appsheep.com, 73bdcb5d7d51463fa655b87fa6847051, RESELLER
appsheep.com, 31fdfbfe3d0e4a6da5305ff849648024, RESELLER
appsheep.com, ae4e0e2cebe3438aa18f7006b85b570d, RESELLER
appsheep.com, fc7556810c904b029cd14668a5ee42e3, RESELLER
appsheep.com, 3a930d9b024c457d966d480b3421e3dd, RESELLER
appsheep.com, b2e975ab60a54848912ddde40b3e88d3, RESELLER
appsheep.com, 14441a46f4f44c9185886bbfbd44bd5a, RESELLER
appsheep.com, 934f1509303b4a19acb9e40d5166a8e8, RESELLER
appsheep.com, c777b24110cc46d0a8e1245342c6c919, RESELLER
lijit.com, 545922, RESELLER, fafdf38b16bf6b2b
lijit.com, 545924, RESELLER, fafdf38b16bf6b2b
media.net, 8CUI89K0D, RESELLER
improvedigital.com, 2527, RESELLER
improvedigital.com, 2528, RESELLER
improvedigital.com, 2529, RESELLER
improvedigital.com, 2530, RESELLER
bidease.com, bidease_seller_46, RESELLER
pubmatic.com, 165980, RESELLER, 5d62403b186f2ace
inmobi.com, b01aa06531c543d8a5fb9982f60afb00, RESELLER, 83e75a7ae333ca9d
appnexus.com, 1019, RESELLER, f5ab79cb980f11d1
video.unrulymedia.com, 2444764291, RESELLER
pubmatic.com, 156212, RESELLER, 5d62403b186f2ace
contextweb.com, 558511, RESELLER, 89ff185a4c4e857c
motorik.io, 100463, RESELLER
eskimi.com, 2020000810, RESELLER
openx.com, 561365249, RESELLER, 6a698e2ec38604c6
media.net, 8CU5L226O, RESELLER
smaato.com, 1100057546, RESELLER, 07bcf65f187117b4
adform.com, 1762, RESELLER
smartadserver.com, 3627, RESELLER, 060d053dcf45cbf3
sharethrough.com, 4762, RESELLER, d53b998a7bd4ecd2
sharethrough.com, 5026, RESELLER, d53b998a7bd4ecd2
appnexus.com, 17044, RESELLER
xandr.com, 17044, RESELLER
adyoulike.com, 76375ac0f5abb5a550c87326b9063b59, RESELLER
adyoulike.com, 5e09d5fe0d58941e6adc167159cc9218, RESELLER
sonobi.com, cddceeb06e, RESELLER, d1a215d9eb5aee9e
media.net, 8CU76268D, RESELLER
yieldmo.com, 3761877318507634863, RESELLER, 6a92c77cfc3d2258
smaato.com, 1100058954, RESELLER, 07bcf65f187117b4
rubiconproject.com, 27130, RESELLER, 0bfd66d529a55807
pubeasy.io, 110039, RESELLER
video.unrulymedia.com, 476748946, RESELLER
appnexus.com, 17417, RESELLER, f5ab79cb980f11d1
xandr.com, 17417, RESELLER, f5ab79cb980f11d1
showheroes.com, 6037, RESELLER
unrulymedia.com, 476748946, RESELLER
bidmachine.io, 1065, RESELLER
bidmachine.io, 1064, RESELLER
video.unrulymedia.com, 475093422, RESELLER
triplelift.com, 13907, RESELLER, 6c33edb13117fd86
sharethrough.com, veuioj8F, RESELLER, d53b998a7bd4ecd2
adsinteractive.com, 39993, RESELLER
adingo.jp, 32534, RESELLER
rubiconproject.com, 27386, RESELLER, 0bfd66d529a55807
improvedigital.com, 2602, RESELLER
improvedigital.com, 2603, RESELLER
criteo.com, B-067384, RESELLER, 9fac4a4a87c2a44f
criteo.com, B-074375, RESELLER, 9fac4a4a87c2a44f
pubmatic.com, 164532, RESELLER, 5d62403b186f2ace
pubnative.net, 1009046, RESELLER, d641df8625486a7b
bidmachine.io, 98, RESELLER
smartadserver.com, 4543, RESELLER, 060d053dcf45cbf3
pubmatic.com, 166536, RESELLER, 5d62403b186f2ace
admanmedia.com, 2045, RESELLER
adelement.com, 36004, RESELLER
admixer.net, e58950b9-933f-4f5b-b49c-7ca927540db1, RESELLER
lunamedia.io, 193bca549318aed0434226d4d73e13f3, RESELLER, 524ecb396915caaf
pubmatic.com, 160989, RESELLER, 5d62403b186f2ace
taurusx.com, 80614, RESELLER
33across.com, 001Pg00000LoMyvIAF, RESELLER, bbea06d9c4d2853c
admanmedia.com, 2072, RESELLER
visiblemeasures.com, 1004, RESELLER
themediagrid.com, NC7LXT, RESELLER, 35d5010d7789b49d
criteo.com, B-081657, RESELLER, 9fac4a4a87c2a44f
meazy.co, 15510, RESELLER
xe.works, 15511, RESELLER
pubmatic.com, 162837, RESELLER, 5d62403b186f2ace
pubmatic.com, 166238, RESELLER, 5d62403b186f2ace
entravision.com, 1525, RESELLER
display.io, 221372, RESELLER
dauup.com, 34109, RESELLER
adingenious.com, 75075, RESELLER
audiobranch.co, 256780, RESELLER
instreamatic.com, 78, RESELLER
admanmedia.com, 34, RESELLER
visiblemeasures.com, 1009, RESELLER
video.unrulymedia.com, 2979066401945419350, RESELLER
auxoads.com, 12125, RESELLER
pubmatic.com, 160888, RESELLER, 5d62403b186f2ace
rubiconproject.com, 24248, RESELLER, 0bfd66d529a55807
lijit.com, 503707, RESELLER, fafdf38b16bf6b2b
lijit.com, 550620, RESELLER, fafdf38b16bf6b2b
video.unrulymedia.com, 169764768, RESELLER
video.unrulymedia.com, 583925374, RESELLER
admixer.net, 1046d8dc-f1a9-439d-a8a5-3401fda83729, RESELLER
loopme.com, 11362, RESELLER, 6c8d5f95897a5a3b
smaato.com, 1100057444, RESELLER, 07bcf65f187117b4
inmobi.com, 9e311c7a68e94888aac7fbb4272381e2, RESELLER, 83e75a7ae333ca9d
inmobi.com, fe4db13744124582a6a2b18964560ce7, RESELLER, 83e75a7ae333ca9d
risecodes.com, 67e92bf7698942000140acce, RESELLER
smartadserver.com, 4284, RESELLER, 060d053dcf45cbf3
smartadserver.com, 4395, RESELLER, 060d053dcf45cbf3
media.net, 8CU12AQ1Y, RESELLER
openx.com, 537140488, RESELLER, 6a698e2ec38604c6
yieldmo.com, 2754490424016969782, RESELLER
33across.com, 0010b00002Xbn7QAAR, RESELLER, bbea06d9c4d2853c
voisetech.com, 1127, RESELLER, 9009ef0379162448
media.net, 8CUE65SNU, RESELLER
freewheel.tv, 1138513-524565, RESELLER
freewheel.tv, sg1258340, RESELLER
supply.colossusssp.com, 907, RESELLER
zetaglobal.net, 512, RESELLER
themediagrid.com, WS2D8N, RESELLER, 35d5010d7789b49d
appnexus.com, 17553, RESELLER, f5ab79cb980f11d1
rubiconproject.com, 25692, RESELLER, 0bfd66d529a55807
adagio.io, 1280, RESELLER
improvedigital.com, 2625, RESELLER
adagio.io, 1581, RESELLER
criteo.com, NC7LXT, RESELLER, 35d5010d7789b49d
criteo.com, WS2D8N, RESELLER, 35d5010d7789b49d
onlinemediasolutions.com, 43275, RESELLER, b3868b187e4b6402
criteo.com, TERO1F, RESELLER, 35d5010d7789b49d
criteo.com, TVX1JK, RESELLER, 35d5010d7789b49d
themediagrid.com, TERO1F, RESELLER, 35d5010d7789b49d
themediagrid.com, TVX1JK, RESELLER, 35d5010d7789b49d
cgnl.io, 7000, RESELLER
cignal.io, 7000, RESELLER
carambo.la, 914730833, RESELLER
openx.com, 537140323, RESELLER, 6a698e2ec38604c6
pubmatic.com, 159626, RESELLER, 5d62403b186f2ace
pubmatic.com, 166836, RESELLER, 5d62403b186f2ace
algogear.com, 7bce3c82e6da7741, RESELLER
algogear.com, 406353d0e9db6c5d, RESELLER
algogear.com, a6bc46b1ba706474, RESELLER
anzu.io, 69539c978f0e5ae09b63f880, RESELLER
media.net, 8CU47MDK1, RESELLER
pubmatic.com, 167515, RESELLER, 5d62403b186f2ace
pubmatic.com, 167514, RESELLER, 5d62403b186f2ace
openx.com, 543888036, RESELLER, 6a698e2ec38604c6
pubeasy.io, 110070, RESELLER
rubiconproject.com, 26512, RESELLER, 0bfd66d529a55807
rubiconproject.com, 26386, RESELLER, 0bfd66d529a55807
lijit.com, 569924, RESELLER, fafdf38b16bf6b2b
rubiconproject.com, 26000, RESELLER, 0bfd66d529a55807
pubmatic.com, 167176, RESELLER, 5d62403b186f2ace
appnexus.com, 15816, RESELLER, f5ab79cb980f11d1
triplelift.com, 14697, RESELLER, 6c33edb13117fd86
rubiconproject.com, 24030, RESELLER, 0bfd66d529a55807
azberry.com, 721014, RESELLER
pubmatic.com, 165157, RESELLER, 5d62403b186f2ace
adform.com, 3283, RESELLER
xandr.com, 15278, RESELLER, f5ab79cb980f11d1
triplelift.com, 6457, RESELLER, 6c33edb13117fd86
sharethrough.com, zMvLLpo1, RESELLER, d53b998a7bd4ecd2
triplelift.com, 14734, RESELLER, 6c33edb13117fd86
triplelift.com, 14734-EB, RESELLER
triplelift.com, 14742, RESELLER, 6c33edb13117fd86
triplelift.com, 14740, RESELLER, 6c33edb13117fd86
triplelift.com, 14751, RESELLER, 6c33edb13117fd86
ushareit.com, LC7dc692567a127a57, RESELLER
lacunads.com, LC7dc692567a127a57, RESELLER
start.io, 150505487, RESELLER
zmaticoo.com, 5135969, RESELLER
pubmatic.com, 167636, RESELLER, 5d62403b186f2ace
themediagrid.com, 6RYAUJ, RESELLER, 9fac4a4a87c2a44f
tradplusad.com, 87eb488afb2a9cca, RESELLER
pubmatic.com, 160692, RESELLER, 5d62403b186f2ace
openx.com, 561436793, RESELLER, 6a698e2ec38604c6
rubiconproject.com, 27987, RESELLER, 0bfd66d529a55807
bildapp.net, 164391510, RESELLER
metup.it, AJxF6R674a9M6CaTvK, RESELLER
ssp.e-volution.ai, AJxF6R674a9M6CaTvK, RESELLER
refine.direct, 1000730C, RESELLER
beintoo.com, C7308, RESELLER
serpensx.com, SRP25080073, RESELLER
programmaticx.ai, 6000123, RESELLER, b42d42eb28400efa
bluexad.ai, 2037130095256145920, RESELLER
playdigo.com, 2091, RESELLER, 92011346d63d3c30
adnimation.com, 20250084, RESELLER
pubmatic.com, 167981, RESELLER, 5d62403b186f2ace
ogury.com, 260f8f9c-5adc-46ca-9418-ed6ad8948af7, RESELLER
media.net, 8CA7BO5Y1, RESELLER, 818f58666cabc936
media.net, 8CAOK5V3Y, RESELLER, 818f58666cabc936
improvedigital.com, 2883, RESELLER
improvedigital.com, 2884, RESELLER
bidmachine.io, 1592, RESELLER
richaudience.com, x1vKpaGD9I, RESELLER
aniview.com, 69d24331b4476e4a300e1584, RESELLER, 78b21b
bidline.net, 4d8b12af, RESELLER
loopme.com, 20970, RESELLER, 6c8d5f95897a5a3b
loopme.com, 20968, RESELLER, 6c8d5f95897a5a3b
indexexchange.com, 216513, RESELLER, 50b1c356f2c5c8fc
seedtag.com, 674f42e4de70100007eeab9d, RESELLER
rubiconproject.com, 26846, RESELLER, 0bfd66d529a55807
themediagrid.com, IOSRAB, RESELLER, 9fac4a4a87c2a44f
blueseasx.com, 7138154, RESELLER, 7998eac5087f6110
bid-matrix.com, a9292d812c7da858, RESELLER
jambojar.com, 2026J77, RESELLER
adorphic.com, 4065, RESELLER
nativo.com, 6178, RESELLER, 59521ca7cc5e9fee
onetag.com, 9543f34076d707c, RESELLER
vidazoo.com, 6a3384a48eca8f6ddad62520, RESELLER, b6ada874b4d7d0b2
smaato.com, 1100058459, RESELLER, 07bcf65f187117b4
nativo.com, 6167, RESELLER, 59521ca7cc5e9fee
adagio.io, 1639, RESELLER
media.net, 8CAXEGFDP, RESELLER
pubmatic.com, 166063, RESELLER, 5d62403b186f2ace
pubmatic.com, 168362, RESELLER, 5d62403b186f2ace
pubmatic.com, 168363, RESELLER, 5d62403b186f2ace
adform.com, 3428, RESELLER, 9f5210a2f0999e32
adform.com, 3429, RESELLER, 9f5210a2f0999e32
pubmatic.com, 168366, RESELLER, 5d62403b186f2ace
pubmatic.com, 168367, RESELLER, 5d62403b186f2ace
outbrain.com, 002084f3cc5242e7bbd2fb9a69e220a36a, RESELLER
bigo.sg, t8wi09riwv, RESELLER
smaato.com, 1100060441, RESELLER, 07bcf65f187117b4`;
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
