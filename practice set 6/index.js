let home = document.querySelector('#home')
let about = document.querySelector('#about')
let contact = document.querySelector('#contact')



let Hometext = document.querySelector('#Hometext')
let Abouttext = document.querySelector('#Abouttext')
let Contacttext = document.querySelector('#Contacttext')


Hometext.style.display = "block"
Hometext.style.width = "50%"

home.addEventListener("click", function () {
    saaretexthatao();
    Hometext.style.display = "block"
    Hometext.style.width = "50%"
})

about.addEventListener("click", function () {
    saaretexthatao();
    Abouttext.style.display = "block"
    Abouttext.style.width = "50%"
})

contact.addEventListener("click", function () {
    saaretexthatao();
    Contacttext.style.display = "block"
    Contacttext.style.width = "50%"
})


function saaretexthatao(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}




// this code is short  or chatgpt se h & or uper wale code easy and simpal words me h

// const sections = ["home", "about", "contact"];
// const texts = ["Hometext", "Abouttext", "Contacttext"];

// document.querySelector(`#${texts[0]}`).style.display = "block";
// document.querySelector(`#${texts[0]}`).style.width = "50%";

// sections.forEach((section, index) => {
//     document.querySelector(`#${section}`).addEventListener("click", () => {
//         document.querySelectorAll("h3").forEach(h3 => h3.style.display = "none");
//         let text = document.querySelector(`#${texts[index]}`);
//         text.style.display = "block";
//         text.style.width = "50%";
//     });
// });


