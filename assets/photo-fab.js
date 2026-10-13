// Floating photos button for every page of the vow site.
(function(){
var onPhotos=/photos\.html$/.test(location.pathname);
var css=".vfab{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:9000;width:58px;height:58px;border-radius:50%;border:0;background:#b88996;color:#fff;font-size:1.6rem;line-height:58px;text-align:center;cursor:pointer;box-shadow:0 6px 18px rgba(61,51,54,.28);transition:transform .15s,box-shadow .15s;-webkit-tap-highlight-color:transparent}"+
"@keyframes vfabGlow{0%,100%{box-shadow:0 6px 18px rgba(61,51,54,.28),0 0 0 0 rgba(184,137,150,.55),0 0 14px 2px rgba(212,176,186,.55)}50%{box-shadow:0 6px 18px rgba(61,51,54,.28),0 0 0 10px rgba(184,137,150,0),0 0 26px 8px rgba(212,176,186,.75)}}"+
".vfab{animation:vfabGlow 2.6s ease-in-out infinite}.vfab.open{animation:none}"+
"@media (prefers-reduced-motion:reduce){.vfab{animation:none;box-shadow:0 6px 18px rgba(61,51,54,.28),0 0 18px 5px rgba(212,176,186,.7)}}"+
".vfab:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(61,51,54,.32)}.vfab.open{background:#3d3336}"+
".vfab-menu{position:fixed;right:16px;bottom:calc(84px + env(safe-area-inset-bottom));z-index:9000;display:none;flex-direction:column;gap:8px;align-items:flex-end}.vfab-menu.show{display:flex}"+
".vfab-menu a{font-family:Nunito,system-ui,sans-serif;font-weight:700;font-size:.95rem;text-decoration:none;background:#fffdfb;color:#3d3336;border:1px solid rgba(184,160,122,.5);border-radius:999px;padding:11px 16px;box-shadow:0 4px 14px rgba(61,51,54,.18);white-space:nowrap}"+
".vfab-menu a:active{background:#f6e8ec}body{padding-bottom:84px}";
var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
var b=document.createElement("button");b.className="vfab";b.type="button";
var m=document.createElement("div");m.className="vfab-menu";
m.innerHTML='<a href="photos.html" data-m="cam">📸 Take photos</a><a href="photos.html?view=gallery#gallery" data-m="gal">🖼 See &amp; Download photos</a>';
document.body.appendChild(m);document.body.appendChild(b);
function camOn(){var v=document.getElementById("camView");return v&&!v.hidden}
function label(){if(onPhotos){var c=camOn();b.textContent=c?"🖼":"📸";b.setAttribute("aria-label",c?"See & download photos":"Take photos");b.title=b.getAttribute("aria-label")}else{b.textContent=m.classList.contains("show")?"✕":"📷";b.setAttribute("aria-label","Photos menu");b.title="Photos"}}
b.onclick=function(){if(onPhotos){var t=document.getElementById(camOn()?"tGal":"tCam");t&&t.click();if(camOn())scrollTo({top:0,behavior:"smooth"});setTimeout(label,50);return}
 m.classList.toggle("show");b.classList.toggle("open");label()};
document.addEventListener("click",function(e){if(!onPhotos&&m.classList.contains("show")&&!m.contains(e.target)&&e.target!==b){m.classList.remove("show");b.classList.remove("open");label()}});
if(onPhotos)["tCam","tGal","seeBig"].forEach(function(id){var el=document.getElementById(id);el&&el.addEventListener("click",function(){setTimeout(label,50)})});
label();})();
