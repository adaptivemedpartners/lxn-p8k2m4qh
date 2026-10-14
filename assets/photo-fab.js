// Floating photos button for every page of the vow site.
(function(){
var onPhotos=/photos\.html$/.test(location.pathname);
if(onPhotos)return; // photos page has its own Camera/Gallery tabs
var css=".vfab{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:9000;width:58px;height:58px;border-radius:50%;border:0;background:#b88996;color:#fff;font-size:1.6rem;line-height:58px;text-align:center;cursor:pointer;box-shadow:0 6px 18px rgba(61,51,54,.28);transition:transform .15s,box-shadow .15s;-webkit-tap-highlight-color:transparent}"+
".vfab-glow{position:fixed;right:-16px;bottom:calc(-16px + env(safe-area-inset-bottom));width:122px;height:122px;border-radius:50%;z-index:8999;pointer-events:none;"+
"background:radial-gradient(circle,rgba(255,170,205,.95) 0%,rgba(255,130,180,.7) 26%,rgba(250,120,170,.38) 46%,rgba(250,120,170,.12) 62%,rgba(250,120,170,0) 72%);filter:blur(7px);animation:vfabBreathe 3.4s ease-in-out infinite}"+
"@keyframes vfabBreathe{0%,100%{opacity:.6;transform:scale(.88)}50%{opacity:1;transform:scale(1.12)}}"+
"@keyframes vfabShadow{0%,100%{box-shadow:inset 0 2px 6px rgba(255,255,255,.45),inset 0 -3px 8px rgba(160,60,100,.25),0 0 10px 2px rgba(255,140,190,.55),0 0 24px 6px rgba(255,140,190,.35),0 6px 16px rgba(61,51,54,.22)}50%{box-shadow:inset 0 2px 8px rgba(255,255,255,.6),inset 0 -3px 8px rgba(160,60,100,.2),0 0 16px 5px rgba(255,150,195,.8),0 0 40px 14px rgba(255,140,190,.5),0 6px 16px rgba(61,51,54,.22)}}"+
".vfab{background:radial-gradient(circle at 35% 30%,#f2b6c9 0%,#d98aa6 45%,#b8708c 100%);animation:vfabShadow 3.4s ease-in-out infinite}.vfab.open{animation:none;background:#3d3336}"+
"@media (prefers-reduced-motion:reduce){.vfab-glow{animation:none;opacity:.85}.vfab{animation:none;box-shadow:inset 0 2px 6px rgba(255,255,255,.5),0 0 14px 4px rgba(255,140,190,.7),0 0 34px 10px rgba(255,140,190,.4),0 6px 16px rgba(61,51,54,.22)}}"+
".vfab:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(61,51,54,.32)}.vfab.open{background:#3d3336}"+
".vfab-menu{position:fixed;right:16px;bottom:calc(84px + env(safe-area-inset-bottom));z-index:9000;display:none;flex-direction:column;gap:8px;align-items:flex-end}.vfab-menu.show{display:flex}"+
".vfab-menu a{font-family:Nunito,system-ui,sans-serif;font-weight:700;font-size:.95rem;text-decoration:none;background:#fffdfb;color:#3d3336;border:1px solid rgba(184,160,122,.5);border-radius:999px;padding:11px 16px;box-shadow:0 4px 14px rgba(61,51,54,.18);white-space:nowrap}"+
".vfab-menu a:active{background:#f6e8ec}body{padding-bottom:84px}";
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
var b=document.createElement("button");b.className="vfab";b.type="button";
var m=document.createElement("div");m.className="vfab-menu";
m.innerHTML='<a href="photos.html" data-m="cam">📸 Take photos</a><a href="photos.html?view=gallery#gallery" data-m="gal">🖼 See &amp; Download photos</a>';
var gl=document.createElement("div");gl.className="vfab-glow";gl.setAttribute("aria-hidden","true");document.body.appendChild(gl);document.body.appendChild(m);document.body.appendChild(b);
function camOn(){var v=document.getElementById("camView");return v&&!v.hidden}
function label(){if(onPhotos){var c=camOn();b.textContent=c?"🖼":"📸";b.setAttribute("aria-label",c?"See & download photos":"Take photos");b.title=b.getAttribute("aria-label")}else{b.textContent=m.classList.contains("show")?"✕":"📷";b.setAttribute("aria-label","Photos menu");b.title="Photos"}}
b.onclick=function(){if(onPhotos){var t=document.getElementById(camOn()?"tGal":"tCam");t&&t.click();if(camOn())scrollTo({top:0,behavior:"smooth"});setTimeout(label,50);return}
 m.classList.toggle("show");b.classList.toggle("open");label()};
document.addEventListener("click",function(e){if(!onPhotos&&m.classList.contains("show")&&!m.contains(e.target)&&e.target!==b){m.classList.remove("show");b.classList.remove("open");label()}});
if(onPhotos)["tCam","tGal","seeBig"].forEach(function(id){var el=document.getElementById(id);el&&el.addEventListener("click",function(){setTimeout(label,50)})});
label();})();
