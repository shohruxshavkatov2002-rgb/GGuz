
(function(){
const KEY="bitu_selected_language";const langs={uz:{flag:"assets/flag-uz.png",label:"O‘zbek",title:"Tilni tanlang"},ru:{flag:"assets/flag-ru.png",label:"Русский",title:"Выберите язык"},en:{flag:"assets/flag-en.jpg",label:"English",title:"Choose language"}};
function $(s,r=document){return r.querySelector(s)}function $$(s,r=document){return Array.from(r.querySelectorAll(s))}
function update(l){let m=langs[l]||langs.uz;$$("[data-lang-switcher]").forEach(sw=>{let title=$("[data-lang-title]",sw);if(title)title.textContent=m.title;$$(".lang-stack__item",sw).forEach(i=>i.classList.toggle("is-active",i.dataset.lang===l))});document.documentElement.lang=l;if(window.BITU_RENDER_SITE)window.BITU_RENDER_SITE()}
function set(l){localStorage.setItem(KEY,l);update(l)}
function init(){$$("[data-lang-switcher] .lang-stack__item").forEach(i=>{let b=$("button",i)||i;b.addEventListener("click",()=>set(i.dataset.lang))});update(localStorage.getItem(KEY)||"uz")}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
