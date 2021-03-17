/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "86b55fcbf0eb6db7c367c3a883c97f12"
  },
  {
    "url": "api/internal/index.html",
    "revision": "007b183fef243e39f7d7eeea07f0822a"
  },
  {
    "url": "api/internal/modules.html",
    "revision": "04f8ea6e4d14a0f28e238a3cdd24a1a3"
  },
  {
    "url": "api/validator/index.html",
    "revision": "9709812bab2adf14099e848848a6188c"
  },
  {
    "url": "api/validator/modules.html",
    "revision": "e10e1294268cadd16e04248942fbd49d"
  },
  {
    "url": "assets/css/0.styles.ad5b6eab.css",
    "revision": "8aa294f2a42baf0b1172011091f58cc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.3b51a8bc.js",
    "revision": "7c0d96f691f84bb30e2a58943215e2f6"
  },
  {
    "url": "assets/js/11.4e910557.js",
    "revision": "5b5514f7f5a63bddd47b8d72a67d84f4"
  },
  {
    "url": "assets/js/12.875f5f17.js",
    "revision": "41628011ae7bb26f458d7141c2a2d84b"
  },
  {
    "url": "assets/js/13.871cc697.js",
    "revision": "a65fb408b32fd66999f62f6536b702c9"
  },
  {
    "url": "assets/js/14.b1181daa.js",
    "revision": "63c6b51127faa3d99b2a7ef52afec1ad"
  },
  {
    "url": "assets/js/15.25fc1f80.js",
    "revision": "dc48bdde9797e249ca2cb4167b165375"
  },
  {
    "url": "assets/js/16.1b4fbfdf.js",
    "revision": "2c4c35a9e205909512676f53b8df6c2c"
  },
  {
    "url": "assets/js/17.d8902087.js",
    "revision": "51ee9f7654b3512fbbd9ba06dec7e673"
  },
  {
    "url": "assets/js/18.aceae0a3.js",
    "revision": "dfa9322c5467deed6a286efbfe33a168"
  },
  {
    "url": "assets/js/19.e546b130.js",
    "revision": "4cb1aceec3dd0678ff660d87c63e7bd9"
  },
  {
    "url": "assets/js/2.aab8771d.js",
    "revision": "bd39486216e67e80dcdc269941243cbe"
  },
  {
    "url": "assets/js/3.4a115da5.js",
    "revision": "0260b6b77ddceba095d9748499647c1a"
  },
  {
    "url": "assets/js/4.6c2e077d.js",
    "revision": "cbee708075fb0395457e97b77a699fd1"
  },
  {
    "url": "assets/js/5.a8c3adcb.js",
    "revision": "0f8696f5487c0be9641bae9653ad6649"
  },
  {
    "url": "assets/js/6.b87c7a34.js",
    "revision": "e3253ff80348cdaefb0c62d56ad254cc"
  },
  {
    "url": "assets/js/7.2479fc6e.js",
    "revision": "aeca2467b2283cfbce9c244e1de8fb56"
  },
  {
    "url": "assets/js/8.3878332d.js",
    "revision": "b51bff9a688abb9038b658581639c12c"
  },
  {
    "url": "assets/js/9.bb975963.js",
    "revision": "d412c0281b5e0850251568f0f03159a3"
  },
  {
    "url": "assets/js/app.a155bb3e.js",
    "revision": "20c87b4dcc1895afe8a1585a825f9ca4"
  },
  {
    "url": "blogo.png",
    "revision": "b87539e8946be8b3ef3f9d3e717be883"
  },
  {
    "url": "guide/commitConvention.html",
    "revision": "bb4ff331c72eccbe728700f20a5cd1fe"
  },
  {
    "url": "guide/install.html",
    "revision": "85a546a5f23a2df35cc13d15d34a26d2"
  },
  {
    "url": "guide/introduction.html",
    "revision": "4a3b9adeb21d5d5f5955b069e667e0f9"
  },
  {
    "url": "guide/pull.html",
    "revision": "8f7f90a07e58588ede7241f277075aac"
  },
  {
    "url": "guide/repo.html",
    "revision": "de350cfcc52663c16be52753208c9aea"
  },
  {
    "url": "index.html",
    "revision": "f73b06ef9dd68cf40ac1476acd1ffe6d"
  },
  {
    "url": "logo.png",
    "revision": "9a083fc8159eb597583e7405814ca620"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
