(()=>{"use strict";const e=(()=>{const e=document.createElement("div");return e.classList.add("flex-container"),e})(),t=(()=>{const e=document.createElement("img");e.src="restaurant.png",e.alt="restaurant logo",e.id="logo";const t=document.createElement("div");return t.appendChild(e),t})(),n=(()=>{const e=document.createElement("div");return e.textContent="Home",e})(),d=(()=>{const e=document.createElement("div");return e.textContent="Menu",e})(),o=(()=>{const e=document.createElement("div");return e.textContent="Contact",e})(),c=e=>{((e,t)=>{t.forEach((t=>{const n=document.createElement("div");n.classList.add("welcome"),n.textContent=t,e.appendChild(n)}))})(e,(()=>{const e=[];return e.push("Welcome to RESTAURANT."),e.push("We've been around since the beginning of time."),e.push("We look forward to seeing you soon."),e})())},r=(()=>{const e=document.createElement("div");return e.id="content-holder",e})(),i=()=>{for(;r.firstChild;)r.removeChild(r.lastChild)},a=()=>{i(),c(r)};var l;(c=>{e.appendChild(t),e.appendChild(n),e.appendChild(d),(e=>{e.appendChild(o)})(e),c.appendChild(e)})(l=document.querySelector("#content")),(e=>{e.appendChild(r)})(l),c(r),t.addEventListener("click",a),n.addEventListener("click",a),d.addEventListener("click",(()=>{i(),(e=>{const t=document.createElement("div");t.textContent="Menu",e.appendChild(t)})(r)})),o.addEventListener("click",(()=>{i(),(e=>{const t=document.createElement("div");t.textContent="Contact",e.appendChild(t)})(r)}))})();