import{a as m,i as s,S as p}from"./assets/vendor-Qob_5Ba8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y="46638996-2a2e598d70d21a2b7de7c0e18",h="https://pixabay.com/api/";async function b(o,t=1){const n=`${h}?key=${y}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=12`;try{const i=await m.get(n);if(i.status!==200)throw new Error("Failed to fetch images");return i.data}catch(i){throw console.error("Error fetching images:",i),i}}function L({webformatURL:o,largeImageURL:t,tags:n,likes:i,views:e,comments:r,downloads:a}){return`
      <a href="${t}" class="photo-link">
            <div class="photo-card">
                <img src="${o}" alt="${n}" loading="lazy" />
                <div class="info">
                    <p><b>Likes:</b> ${i}</p>
                    <p><b>Views:</b> ${e}</p>
                    <p><b>Comments:</b> ${r}</p>
                    <p><b>Downloads:</b> ${a}</p>
                </div>
            </div>
        </a>
    `}function w(o){const t=document.querySelector(".gallery");t.innerHTML="";const n=o.map(L).join("");t.insertAdjacentHTML("beforeend",n)}const l=document.getElementById("search-form"),g=document.querySelector(".gallery");let u=1,d="",c;function v(){c=new p(".gallery a",{captionsData:"title",captionPosition:"bottom",captionDelay:250,captions:!0})}l.addEventListener("submit",async o=>{o.preventDefault();const t=l.query.value.trim();if(!t){s.error({title:"Error",message:"Please enter a search term."});return}d=t,u=1,g.innerHTML="";try{$();const n=await b(d,u);if(f(),n.hits.length===0){s.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}w(n.hits),c?c.refresh():v()}catch{f(),s.error({title:"Error",message:"Something went wrong. Please try again later."})}});function $(){g.insertAdjacentHTML("beforebegin",'<div class="loader"></div>')}function f(){const o=document.querySelector(".loader");o&&o.remove()}
//# sourceMappingURL=index.js.map
