let e=document.querySelector("form"),t=document.querySelector('button[type="submit"]'),l=document.getElementById("sendingForm"),n=document.getElementById("noSendForm"),o=new bootstrap.Modal(document.getElementById("modalSuccess"));e.addEventListener("submit",(function(s){s.preventDefault(),n.style.display="none";let d=new FormData(e);e.classList.add("was-validated"),document.querySelectorAll("form input:invalid, form textarea:invalid").length||(l.style.display="flex",fetch("./send.ph",{method:"POST",credentials:"same-origin",body:d}).then((e=>e.json())).then((e=>{e.success?(l.style.display="none",o.show()):(l.style.display="none",n.style.display="block",t.classList.remove("disabled"))})).catch((e=>{l.style.display="none",n.style.display="block",t.classList.remove("disabled")})))}));let s=document.querySelector(".js-drive-licence"),d=document.querySelector(".drive-category");s.addEventListener("click",(function(e){let t=e.target;"radio"===t.type&&("drive"===t.id?d.style.display="block":d.style.display="none")}));let i=document.querySelector(".js-english-language"),c=document.querySelector(".english-level");i.addEventListener("click",(function(e){let t=e.target;"radio"===t.type&&("english"===t.id?c.style.display="block":c.style.display="none")}));let r=document.querySelector(".js-student"),y=document.querySelector(".list-student");r.addEventListener("click",(function(e){let t=e.target;console.log(t),"radio"===t.type&&("student"===t.id?y.style.display="block":y.style.display="none")}));let a=document.querySelector(".js-shelter"),u=document.querySelector(".country-shelter");a.addEventListener("click",(function(e){let t=e.target;console.log(t),"radio"===t.type&&("shelter"===t.id?u.style.display="block":u.style.display="none")}));let m=document.querySelector(".js-together"),p=document.querySelector(".info-together");m.addEventListener("click",(function(e){let t=e.target;"radio"===t.type&&("together"===t.id?p.style.display="block":p.style.display="none")}));
//# sourceMappingURL=index.d809aacd.js.map
