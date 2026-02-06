
function guard(prev){
 if(prev && !localStorage.getItem(prev)) location.href="index.html";
}
function setup(day,next){
 let cards=document.querySelectorAll(".card");
 let nextBtn=document.getElementById("nextBtn");
 cards.forEach(c=>{
  c.onclick=()=>{
   cards.forEach(x=>x.classList.remove("selected"));
   c.classList.add("selected");
   localStorage.setItem(day,c.dataset.choice);
   nextBtn.style.display="inline-block";
  };
 });
 nextBtn.onclick=()=>location.href=next;
}
