import{a as m,i as s}from"./assets/vendor-DM1_jADJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g="46638996-2a2e598d70d21a2b7de7c0e18",p="https://pixabay.com/api/";async function y(o,r=1){const n=`${p}?key=${g}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=12`;try{const a=await m.get(n);if(a.status!==200)throw new Error("Failed to fetch images");return a.data}catch(a){throw console.error("Error fetching images:",a),a}}function h({webformatURL:o,largeImageURL:r,tags:n,likes:a,views:e,comments:t,downloads:i}){return`
        <div class="photo-card">
            <a href="${r}">
                <img src="${o}" alt="${n}" loading="lazy" />
            </a>
            <div class="info">
                <p><b>Likes:</b> ${a}</p>
                <p><b>Views:</b> ${e}</p>
                <p><b>Comments:</b> ${t}</p>
                <p><b>Downloads:</b> ${i}</p>
            </div>
        </div>
    `}function b(o){const r=document.querySelector(".gallery");r.innerHTML="";const n=o.map(h).join("");r.insertAdjacentHTML("beforeend",n)}const c=document.getElementById("search-form"),f=document.querySelector(".gallery");let l=1,d="";c.addEventListener("submit",async o=>{o.preventDefault();const r=c.query.value.trim();if(!r){s.error({title:"Error",message:"Please enter a search term."});return}d=r,l=1,f.innerHTML="";try{L();const n=await y(d,l);if(u(),n.hits.length===0){s.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(n.hits)}catch{u(),s.error({title:"Error",message:"Something went wrong. Please try again later."})}});function L(){f.insertAdjacentHTML("beforebegin",'<div class="loader">Loading...</div>')}function u(){const o=document.querySelector(".loader");o&&o.remove()}
//# sourceMappingURL=index.js.map
