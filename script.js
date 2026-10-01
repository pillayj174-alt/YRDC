document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn"), links=document.querySelector(".nav-links");
  if(menu){menu.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",open)})}
  document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links?.classList.remove("open")));
  const items=document.querySelectorAll(".reveal");
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
  items.forEach(i=>observer.observe(i));
  const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
});