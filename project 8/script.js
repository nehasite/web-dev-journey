let  h1Text = document.querySelector("#firsth1").
textContent

let splitedText = h1Text.split(" ")

let clutter = ""
splitedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
    
})
document.querySelector("#firsth1").innerHTML = clutter