
let form = document.querySelector("form")
let inps = document.querySelectorAll('input[type="text"]');
let h4 = document.querySelector("h4")






 form.addEventListener("submit", function(ev){
   ev.preventDefault();
  for(let i=0; i<inps.length; i++){
    if(inps[i].value.trim() === ''){
      h4.textContent = "Error, some fields are blank";
      h4.style.color ="red"
      break;
    }
  }
 })