import{a as d,i as s,S as m}from"./assets/vendor-30VqbI-A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="49372169-96077d899f4beec9c9139b15f",p="https://pixabay.com/api/",g=document.querySelector("input");function h(){const i=g.value.trim(),o=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`${p}?${o}`).then(t=>t.data).catch(t=>s.error({message:"Sorry, there are no images matching your search query. Please try again!"}))}const c=document.querySelector(".gallery"),b=new m(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});function L(i){c.innerHTML="";const o=i.hits.map(({webformatURL:t,largeImageURL:n,tags:e,likes:r,views:a,comments:u,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${t}">
    <img
    class="gallery-image"
    src="${n}"
    alt= "${e.split(", ").slice(0,3).join(", ")}"
    width="360px"
    height="200px"
    />
    </a>
    <ul class="image-titles">
    <li>Likes<br>${r}</br></li>
    <li>Views<br>${a}</br></li>
    <li>Comments<br>${u}</br></li>
    <li>Downloads<br>${f}</br></li>
    </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}const S=document.querySelector("form"),w=document.querySelector("input"),l=document.querySelector(".loader");function q(){l.style.display="block"}function $(){l.style.display="none"}S.addEventListener("submit",k);function k(i){if(i.preventDefault(),document.querySelector(".gallery").innerHTML="",!w.value.trim()){s.error({message:"Please enter a search query before submitting!",position:"topRight"});return}q(),h().then(t=>{if(t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",closeOnClick:!0,color:"#fafafb;",messageColor:"#fafafb",backgroundColor:"#ef4040"});return}L(t)}).finally(()=>{$()})}
//# sourceMappingURL=index.js.map
