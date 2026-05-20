'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5c4b5c07a6cc268da588a8f131cd3cf4",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"index.html": "b09348e333ec497e7f3644face53352b",
"/": "b09348e333ec497e7f3644face53352b",
"main.dart.js": "bc1d210f6fdec1e6089feb0464dc09bb",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
".git/config": "00eca2eb82756e220953ee863e20a8ca",
".git/objects/59/3428f26a4171e134cb3ab4164ff2a85784edda": "c950b9a969a89fad166766b6a40b14ac",
".git/objects/66/1c7d6b3de58c4081fa3dc71247dd19bad4ce10": "890ea2341af4116a06965401a696a418",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/10a424431f85a15cf7649d3d8fa1bd09b817d4": "d9f0fc497b1846ed676406731fd8dba3",
".git/objects/3b/44184837f64ba113ca221af7a0e74de6a8fd84": "b1836f5d9b9d03bc6d2be1462d697e7f",
".git/objects/6f/7288936078cbabd317bf2b88fc7431efea5414": "7320f6ec4176bfd2bd26dbe3e534d5c0",
".git/objects/6f/a5e870a064249dad543a2c12061b5fbb7d68d0": "623faea711ba61b620f939f71406ac44",
".git/objects/03/f075877bd7020916162bc9601e817b9ab4ef69": "367069d967ac79a7a4635c7f9df0a65b",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e0b194d6b54c9dd4e9de98c0c75f651c99f5cb": "2b271440bcd4836d5be0fac177ef8ac4",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/a5acd2793447cdd3f07b6b31f6e8f43f909d35": "822fba367bbcd893a230bef45f61099c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/20a335abd44b3925fc9fcd77aaedce77abf47d": "831212ac4d1c9135944ac149ed13184a",
".git/objects/34/5d0b411f592c8fd94cbb9b32f8afbaa819ec53": "9c36cd9db3a576c8e06bc5c900d6b6cb",
".git/objects/5f/880825d5d653e0b9113663445e3801aac8e238": "2005925f9faae4af4a87a648f3f23a43",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/8e2d39f09f8f1444179aacc47a0e1799b15922": "bd442eb57a157928abc243d1a9b990d3",
".git/objects/9c/7bbdbb6bf549e209a43442d8484ca180487f9a": "631eb5b26f81a4f0819d0a8952909eba",
".git/objects/02/9532d568348829e4c3e3ef0f8a2a3422a53d06": "e0937858879e1c61d93065ada7e905ea",
".git/objects/02/01126623c38b4eca32a87491c53c9813495550": "08ee58a23a266694fede7c46f1579a42",
".git/objects/a4/c97e35397f45a16f65b9b4c4a248a8c35ccb64": "d38bcef032aa8c1b1a4048c29467f5be",
".git/objects/a3/15bd8f81f3bc4db85b5ec5b58f57b3c9b7c8ce": "0080bf23dd0b8b08885f8f0094bf3d9c",
".git/objects/a3/0378a925b0a92b094573bc95e52e075973db91": "ac9e6b31666d8f7a01dcca34ad85610f",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/af013d2fd99b4cb6e7732d888a3cb58759004d": "778bf9024520b35231fcdfecf9322761",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/dc6f81f62360ecf4b7cebdb2a95723ac2a8929": "48369493e6acb9fdce25830c9c085ab0",
".git/objects/a5/895065c5bfcc6ce5ad944dd3354a815defd856": "e42ae5ccf05a56af33bc065f570883fc",
".git/objects/a5/8479624855f27d8674c6a70f9adb7850083f0b": "ee08def48e88b8409158e9504f9cf3f7",
".git/objects/a5/89117c9dea2d858480c538fe0d7c47054ddef9": "0d4a728893ea76110080247c34984205",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/e8e6e3eca0c724060c80d4b6fbc0cdd60bf811": "f3de15816611e31eee94f4a002fd71e8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/49dadfc751b662999caa15a14f57d2f2c08e6e": "48b210c7371846368257e5fe82d09f30",
".git/objects/ae/95833a1aabca8e82f56f1f3698f09507acda98": "cc83e6efa237a3dc0bb424fb85bb146d",
".git/objects/d8/7b28e0ef284f75b525f6c9ea0b5ed7aa40d223": "d39162cfc8c9ab962376cfb1c2b2cf8d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/9c437b82101265afc36c035825fd8462fad379": "9ea1c2f31a6e8d7a722ff14b8a3de124",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/22e513ad1306ee50cfd100b42371de2407fdf4": "e145a9d5a094bfd361502ecdd5b74728",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/ee89f79b6f1e0cc460dd690331e07ad67c3db9": "c5d1b7065957545d3d50ae61239c01b9",
".git/objects/c6/512a778b4645431587a6c69fb57a9e10731485": "656c8bc0f5eeed1414156986aea1f4ad",
".git/objects/c6/a85af86e976cf40ed45f4ba6c720d81a45e6bd": "1d0a0ba21421bebea25c368056b906e4",
".git/objects/ec/414d8cbbce1a4d04fbafdaa8a464ccfc436241": "fcf72d669e65440a28b2b2d1827722da",
".git/objects/ec/424158e12999b65ef1d5f08aede5d5f6d7bbf2": "faf88068a18cd8adb58c0480a480d256",
".git/objects/4e/97975d67d96bcb3a5fe3a283d428bbf5db612a": "4f8e159bf638ad43c0dc13ff2f7a477a",
".git/objects/7d/a6130773b45ac6029b4870fe9d5523151d434c": "e64b77b82ab403619f94cb3fedbe25de",
".git/objects/42/515062d3509dba8d0a988b22926ff1cad5dfef": "8f77b3df3ec22a5ee3623d6ae5bc1a3a",
".git/objects/42/07c527b0faba4dbae56b8bd15649bf08b6c63e": "d5a5eb5a6104518f47cc24f9e446b4ce",
".git/objects/74/c94d9a12b69879289d418735e83a0240b21293": "a650eb7ac01a723e1ffd145dcaa2870f",
".git/objects/28/10efb8e2c98235982495c9df41ba8f66ad9268": "c11ee1fab59e6e7830da3d343548b16a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/09f2b66939f04cf65576d1f5bfb0025efc8b30": "c192084a74bbfc0ceb96c0c1535f0df0",
".git/objects/8a/4905ce65193fa75102450bb6b97a110ce43700": "b962d9682d6599f846579a2ea8293a00",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/980e82ff3af12a3f5d07c1dc8a9dc82abf40f3": "5bf2605ad3372a38c2106eb0cb5607bd",
".git/objects/26/4f4bb1c6444bbee1c1ff9a26b7a8cf253102b5": "e78490bd9d4b6a02e4276c283c39ef8b",
".git/objects/86/acbfe75d96e975ec86cf1688c3d28d8d90593a": "7b24690830f7b14c3c84bd5fe42b438b",
".git/objects/43/23c22ec198530aee1d2357ad9a123854b34566": "bb847defaf2513d6ccbcf0aea532fd8d",
".git/objects/43/40f788be525b77659df3b1ada3e6b3a72e93a3": "3362eaea8e19280ec93928e6730f739a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/68dbd10cfe745b4b14317a2440f34f19e91e50": "a4e2a2a1c8f6c9da214cdf951abe6518",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/5d73fe1527d8da1133fca8c4c9d967459394b4": "c4e2892bd114c1653a6a30a57c044773",
".git/objects/6e/9b816f627e67dd87af3e0fba43f5a12b02e6ab": "e20375561bbbbc791bab1c168d2f4d4e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/3f/f2afb4c560eb2f518b65446b2b13c6a0fdfff3": "308812dd0fa67c370599cfb64b4ce13b",
".git/objects/30/5d91a92f95ae711d60470b8cb905c52c68d42f": "2d661973a6beb791ce2bf85f8e87b8c3",
".git/objects/5e/0282c6c5092ee578cc32f202044833881931a6": "87f7661bb58b98cdeae608527a694120",
".git/objects/5b/9ac9db6723aaa4449f5ccae47989186870063c": "bf46f432ec42a48b17fd6673c2340d07",
".git/objects/63/91470ac042f77d6068aa91419957a805ea2f10": "846e43df906345caec372e6f89f22daa",
".git/objects/bf/72cd1aaeb6a199f8abd4efc3302cdc94c856ce": "3e5512d73821490425c788096752cd95",
".git/objects/bf/9d5c4aa2a5461f2e8bf246e4e3c1aed85a80ba": "58e0a8a567ce001a27c67aaff7a313a0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/33450bc661b373e9f10d054153f554047dce52": "6cbef7a87cdcc381967e5938a7f5dd27",
".git/objects/dd/92ddf1693ae697a27adde02ec52dd0f8ca43a7": "4521c3add63e8e9926ba305062450e6e",
".git/objects/dc/d7a441324315d36d1c2a53a188414042ce180d": "2ad424bbd9e44f4f46e9e0dd0ca00a07",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/da292c7cffb32fee85edacfa03a8c606a8fbc2": "503b8aa14e1358396a4a81dfa4086bd3",
".git/objects/d2/47a3522a87181628ce9de70fd96e4fdc9455f7": "026ea1ee10838f37e5a1f72074837276",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/581171ea26075dc6c447e5d2205db2842e14df": "dab806aaf8129b12c6d7eccc6176a09b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ea/c55855a82165f2411de8d1b00ebc7d24fa4501": "82e4a8c194450f28a07546177fd16084",
".git/objects/e1/04190b390db28e15cac03002461391efa2e85d": "b13bd5019d6a43b3c1143ca01a65755f",
".git/objects/cc/c952e5665592c08deb5cb61b9f017568a14339": "03c3aec5d69d99b060f32888f0c2b99f",
".git/objects/fa/291173f269474ad9cd01688a13a96521c2a6e1": "df026ad2f39a10b7d6a23c34df951873",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/4c62917a9ec68f8413e3a680b571dbd3dafdba": "96708e649a4a4f0c96f8c790fb79b5a7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/e322601fd275facbe17b9e52c7804a88d4b241": "088dfdd95e274838c44657e2c2d14bc5",
".git/objects/83/55e5aa8c16c37bf74de02c9ade752613cb1c57": "d4a5cad6bdc7f945ebb4f22089463cd9",
".git/objects/83/38996c362579f69d8e203dfe67526e12229e2c": "f70ebf6c7d8f90a49caf9c334c5a07ff",
".git/objects/1b/8f50a342b15dfa18f4a3acba1f44987e2afa62": "741447ecf79f85f4e5d9e8153f20dfbf",
".git/objects/48/fbe774b0156d7d10b7811394e3780c49ed4b2d": "30cd19ac58086584eed0dfbbe803323a",
".git/objects/48/b052a91ba3d2625aa214b08272bd3bc8b08d5a": "eb03cfa5e86d95ac97e6a7f17d8a8152",
".git/objects/70/c9855818d561d3c543c5da0cc2374b98d9f04f": "012ec333adc730629c0468a3eec9d14d",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/24/94aae91660caeffac7ab92b674736f50013afa": "ea28f8dc81c9a64a1e165cda3304dc39",
".git/objects/24/94eb26c1401fbff2f91e3d5bfaf35ff2248ed6": "15dc37c300c28029fc1eb9287657c0f2",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/15/e212cd3ffa95d366289bcf2340a6f54cbe505e": "c1a195cc41b6397cb6e58c12bfc25706",
".git/objects/76/b67179c71b9ee93925c28710880c47ab8960f1": "578e84d463a7aa19f1e744f0389019a5",
".git/objects/82/403f1ef99d3025d08cd646c01e61f4f3c9c258": "9ff7bb7586cd7c930f25aeb01336076e",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/4edf821462ceedb4e9929dbd58863e1f65282d": "7f58434041d6caaefd3383520c0efe2a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c1b5085649590c0fef8aeb5b080387c",
".git/logs/refs/heads/main": "2c1b5085649590c0fef8aeb5b080387c",
".git/logs/refs/remotes/origin/main": "232a4fb292abd35ee80bc97f29a047f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "af4b1bc1ce03a65f7c3528d5a1954a1e",
".git/refs/remotes/origin/main": "af4b1bc1ce03a65f7c3528d5a1954a1e",
".git/index": "15cca8dd2060c06b0250c80e1aed1281",
".git/COMMIT_EDITMSG": "3975440317fb967938ee6b141c9bce07",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "74249816fcebcdb769b39031c658a206",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "3c0b474c706627e7a8cfed1aad47e182",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
