(()=>{"use strict";const e=e=>"Escape"===e.key||"Esc"===e.key,t=document.querySelector("#success").content.querySelector(".success").cloneNode(!0),o=document.querySelector("#error").content.querySelector(".error").cloneNode(!0),r=o.querySelector(".error__message"),n=o.querySelector(".error__button"),a=()=>{document.body.appendChild(t);const o=r=>{e(r)&&(r.preventDefault(),t.remove(),document.removeEventListener("keydown",o))};document.addEventListener("keydown",o),t.addEventListener("click",(()=>{t.remove(),document.removeEventListener("keydown",o)}))},c=()=>{r.textContent="Ошибка загрузки данных",document.body.appendChild(o);const t=r=>{e(r)&&(r.preventDefault(),o.remove(),document.removeEventListener("keydown",t))};document.addEventListener("keydown",t),n.addEventListener("click",(()=>{o.remove(),document.removeEventListener("keydown",t)})),o.addEventListener("click",(()=>{o.remove(),document.removeEventListener("keydown",t)}))},u={bungalow:"0",flat:"1000",hotel:"3000",house:"5000",palace:"10000"},s=document.querySelector("#price"),d=document.querySelector("#type"),l=document.querySelector("#timein"),i=document.querySelector("#timeout"),p=document.querySelector("#address"),m=document.querySelector("#room_number"),v=document.querySelector("#capacity"),y=document.querySelector(".map__filters"),f=y.children,h=document.querySelector(".ad-form"),g=h.querySelectorAll("fieldset");d.addEventListener("change",(function(){s.value="",s.placeholder=u[d.value],s.min=u[d.value]})),l.addEventListener("change",(function(){i.value=l.value})),i.addEventListener("change",(function(){l.value=i.value}));const S=function(e){p.setAttribute("readonly","readonly"),p.value=`${e.lat.toFixed(5)},  ${e.lng.toFixed(5)}`},_={flat:"Квартира",bungalow:"Бунгало",house:"Дом",palace:"Дворец",hotel:"Отель"},b=document.querySelector("#card").content.querySelector(".popup"),q=window.L,L={lat:35.67487,lng:139.75039},E=q.map("map-canvas"),C=q.icon({iconUrl:"./leaflet/img/pin.svg",iconSize:[40,40],iconAnchor:[20,40]}),k=q.icon({iconUrl:"./leaflet/img/main-pin.svg",iconSize:[52,52],iconAnchor:[26,52]}),w=q.marker(L,{draggable:!0,icon:k}),x=q.layerGroup().addTo(E),$=function(e){e.forEach((e=>{var t;t=e,q.marker(t.location,{icon:C}).addTo(x).bindPopup(function({author:e,offer:t}){const o=b.cloneNode(!0);o.querySelector(".popup__title").textContent=t.title||"",o.querySelector(".popup__text--address").textContent=t.address||"",o.querySelector(".popup__text--price").textContent=`${t.price} ₽/ночь`||"",o.querySelector(".popup__type").textContent=_[t.type]||"",o.querySelector(".popup__text--capacity").textContent=`${t.rooms} комнаты для ${t.guests} гостей`||"",o.querySelector(".popup__text--time").textContent=`Заезд после ${t.checkin}, выезд до ${t.checkout}`||"",o.querySelector(".popup__description").textContent=t.description||"",o.querySelector(".popup__avatar").src=e.avatar||"img/avatars/default.png";const r=o.querySelector(".popup__features");if(r.innerHTML="",t.features){const e=(e=>{const t=document.createDocumentFragment();return e.forEach((e=>{const o=document.createElement("li");o.classList.add("popup__feature",`popup__feature--${e}`),t.appendChild(o)})),t})(t.features);r.appendChild(e)}else r.remove();const n=o.querySelector(".popup__photos");if(n.innerHTML="",t.photos){const e=(e=>{const t=document.createDocumentFragment();for(let o=0;o<e.length;o++){const r=document.createElement("img");r.src=e[o],r.classList.add("popup__photo"),r.alt="Фотография жилья",r.setAttribute("width","45"),r.setAttribute("height","40"),t.appendChild(r)}return t})(t.photos);n.appendChild(e)}else n.remove();return o}(t))}))},T=["gif","jpg","jpeg","png"],A=document.querySelector("#avatar"),V=document.querySelector(".ad-form-header__preview-img"),D=document.querySelector(".map__filters"),F=D.querySelector("#housing-type"),j=D.querySelector("#housing-price"),z=D.querySelector("#housing-rooms"),M=D.querySelector("#housing-guests"),N=D.querySelectorAll(".map__checkbox"),U={low:{start:0,end:1e4},middle:{start:1e4,end:5e4},high:{start:5e4,end:1e6}},H=e=>F.value===e.offer.type||"any"===F.value,O=e=>"any"===j.value||e.offer.price>=U[j.value].start&&e.offer.price<=U[j.value].end,P=e=>+z.value===e.offer.rooms||"any"===z.value,R=e=>+M.value===e.offer.guests||"any"===M.value,G=e=>Array.from(N).every((t=>!t.checked||!!e.offer.features&&e.offer.features.includes(t.value)));var W;document.querySelector("#room_number"),function(){y.classList.add("ad-form--disabled");for(let e of f)e.setAttribute("disabled","disabled");h.classList.add("ad-form--disabled"),g.forEach((e=>{e.setAttribute("disabled","disabled")}))}(),E.on("load",(()=>{!function(){y.classList.remove("ad-form--disabled");for(let e of f)e.removeAttribute("disabled");h.classList.remove("ad-form--disabled"),g.forEach((e=>{e.removeAttribute("disabled")}))}(),S(L)})),E.setView(L,13),q.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(E),w.addTo(E),W=e=>{var t;$(e.slice(0,10)),t=function(e,t){let o;return function(){clearTimeout(o),o=setTimeout(e,500)}}((()=>{const t=function(e){const t=[];for(let o of e)H(o)&&O(o)&&P(o)&&R(o)&&G(o)&&t.push(o);return t}(e);$(t.slice(0,10))})),D.addEventListener("change",(()=>{x.clearLayers(),t()}))},fetch("https://23.javascript.pages.academy/keksobooking/data").then((e=>{if(e.ok)return e.json();throw new Error(`${e.status} ${e.statusText}`)})).then((e=>{W(e)})).catch((e=>{undefined(`Ошибка загрузки данных ${e}`)})),w.on("moveend",(e=>{const t=e.target.getLatLng();S(t)})),m.value<v.value?v.setCustomValidity(`В ${m.value} комнате возможно разместить только ${m.value} гостя`):v.setCustomValidity(""),v.reportValidity(),v.addEventListener("change",(e=>{e.currentTarget.value>m.value?(v.style.borderColor="red",v.setCustomValidity(`В ${m.value} комнате возможно разместить до  ${m.value} гостей`)):"0"==v.value?(v.style.borderColor="red",v.setCustomValidity("Не для гостей")):v.setCustomValidity(""),v.reportValidity()})),m.addEventListener("change",(e=>{e.currentTarget.value<v.value&&"100"!==m.value?(v.style.borderColor="red",v.setCustomValidity(`В ${e.currentTarget.value} комнате возможно разместить до ${e.currentTarget.value} гостей`)):"100"===m.value?(v.style.borderColor="red",v.setCustomValidity("Не для гостей")):v.setCustomValidity(""),v.reportValidity()})),A.addEventListener("change",(()=>{const e=A.files[0],t=e.name.toLowerCase();if(T.some((e=>t.endsWith(e)))){const t=new FileReader;t.addEventListener("load",(()=>{V.src=t.result})),t.readAsDataURL(e)}})),h.addEventListener("submit",(e=>{var t,o,r;e.preventDefault(),t=a,o=c,r=new FormData(e.target),fetch("https://23.javascript.pages.academy/keksobooking",{method:"POST",body:r}).then((e=>{e.ok?t("Ваше объявление успешно размещено!"):e.status>=500&&e.status<=505?o("Не удалось получить данные с сервера. Попробуйте ещё раз!"):o("Не удалось отправить форму. Попробуйте ещё раз!")})).catch((()=>{o("Не удалось отправить форму. Попробуйте ещё раз!")}))}))})();
//# sourceMappingURL=main.bundle.js.map