let prg = document.querySelector("#progress");
let h3 = document.querySelector("h3");

let count = 0;
let interval = setInterval(function () {
    if (count >= 100) {
        h3.style.opacity = 1
        clearInterval(interval); 
    } else {
        count++;
        prg.style.width = count + '%';
    }
}, 30);
