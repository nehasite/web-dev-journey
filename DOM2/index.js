let abcd = document.createElement('h1')
abcd.textContent = "kind you"
abcd.classList.add("btn")
 document.querySelector("body").appendChild(abcd)

 //img
 let img = document.createElement("img")
img.src = 'https://images.unsplash.com/photo-1740953794738-5cc7f8588d1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&Zixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8';
  document.querySelector("body").appendChild(img)


//addeventlistener

let btn = document.querySelector("button");
btn.addEventListener( 'click' , function(){
    btn.textContent = 'starting'
    btn.style.backgroundColor = 'green'


})

