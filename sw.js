if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const c=e=>n(e,a),d={module:{uri:a},exports:s,require:c};i[a]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(o(...e),s)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"5fe77b4971950e76740b34c5a66c85e7"},{url:"android-chrome-384x384.png",revision:"557b0af9aac1aa71b5e310a31cb7ac36"},{url:"apple-touch-icon.png",revision:"d52b736496e31be682db0a1242038a13"},{url:"assets/index.5de7c4f9.js",revision:null},{url:"assets/index.98fc7d8e.css",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"favicon.ico",revision:"d27543edbd5707b4dfb09aebc49d01a8"},{url:"favicon/favicon-16x16.png",revision:"7f89020799195a61112b49be3fb028d2"},{url:"favicon/favicon-32x32.png",revision:"42bdcf51f5cee8bc1c9e0177606b4396"},{url:"favicon/mstile-150x150.png",revision:"055b0489d5fa8d924dec0e2456aa43b6"},{url:"favicon/safari-pinned-tab.svg",revision:"158721cd205aae1813aa3a90946090d4"},{url:"index.html",revision:"ff0e618127158d908f127a51b8800c49"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"android-chrome-192x192.png",revision:"5fe77b4971950e76740b34c5a66c85e7"},{url:"android-chrome-384x384.png",revision:"557b0af9aac1aa71b5e310a31cb7ac36"},{url:"manifest.webmanifest",revision:"6db642e66ffc84a22cd344c1657ed759"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
