import{a as d,S as m,i as s}from"./assets/vendor-30VqbI-A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="49372169-96077d899f4beec9c9139b15f",y="https://pixabay.com/api/",g=document.querySelector("input");function h(){const i=g.value.trim(),o=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`${y}?${o}`).then(r=>r.data).catch(r=>r)}const c=document.querySelector(".gallery"),b=new m(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});function L(i){c.innerHTML="";const o=i.hits.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:n,comments:u,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${r}">
    <img
    class="gallery-image"
    src="${a}"
    alt="${e}"
    width="360px"
    height="200px"
    />
    </a>
    <ul class="image-titles">
    <li>Likes<br>${t}</br></li>
    <li>Views<br>${n}</br></li>
    <li>Comments<br>${u}</br></li>
    <li>Downloads<br>${f}</br></li>
    </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}const w=document.querySelector("form"),S=document.querySelector("input"),l=document.querySelector(".loader");function q(){l.style.display="block"}function $(){l.style.display="none"}w.addEventListener("submit",k);function k(i){if(i.preventDefault(),document.querySelector(".gallery").innerHTML="",!S.value.trim()){s.error({message:"Please enter a search query before submitting!",position:"topRight"});return}q(),h().then(r=>{if(r.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnClick:!0,color:"#fafafb;",messageColor:"#fafafb",backgroundColor:"#ef4040"});return}L(r)}).finally(()=>{$()})}
//# sourceMappingURL=index.js.map
