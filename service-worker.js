!function(){"use strict";const e=["client/client.1cd1079d.js","client/index.475fd051.js","client/RadioGroup.fc7c5ce3.js","client/children.a75f0ef7.js","client/success.aa61177d.js","client/[id].5c56e6a9.js"].concat(["service-worker-index.html","2764-1.svg","2764.svg","CNAME","avatar.svg","compsoc-icon.png","compsoc-profile-white-nomargin.png","fonts/CascadiaCode.woff2","fonts/fipps-regular-webfont.ttf","fonts/fipps-regular-webfont.woff","fonts/fippsfilled-regular-webfont.ttf","fonts/fippsfilled-regular-webfont.woff","global.css","manifest.json","social.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1601595363312").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1601595363312"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1601595363312").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
