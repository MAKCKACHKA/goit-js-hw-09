function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var r=l("7Y9D8");const i=document.querySelector(".form");let u=i.elements.delay,a=i.elements.step,s=i.elements.amount;function d(e,t){return new Promise(((n,o)=>{const l=Math.random()>.3;setInterval((()=>{l?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.addEventListener("submit",(t=>{t.preventDefault();const n=Number(u.value),o=Number(a.value),l=Number(s.value);for(let t=0;t<l;t++){d(t+1,n+t*o).then((({position:t,delay:n})=>{e(r).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}u.value="",a.value="",s.value=""}));
//# sourceMappingURL=03-promises.81dda98d.js.map