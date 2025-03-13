
//  first project in js with the help of Dom
function colorblack(){
    document.body.style.background="black";
   
  }
 
//    second project 
let h1 = document.getElementById("section");


console.log(h1.addEventListener("click", () => { 
    document.body.style.backgroundColor = "green";
    h1.style.color = "white"; 
    
}));
