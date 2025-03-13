

 let input = document.querySelector("input");
let data = [
    { name: "Neha", src:"https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/6f/ab/dc/c0/5a/v1_E11/E1137YU7.jpeg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=aee1fe11611897d7a8b8d67309a0760b61d94423c8e5670d117fae778bdc39c1"

    },
    { name: "Nisha", src:"https://elements-resized.envatousercontent.com/envato-shoebox/6379/527c-6b8c-4dd0-b3f2-310fe80fc35d/1973047.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=5b1666bec860f181857a302f8d0366f876e9a3f899b415e9683e939fa9c78095"

    },
    { name: "kittu", src:"https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/94/ef/bc/40/89/v1_E11/E113BP5B.jpeg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=7fa960eb06793d189e245dfdd6f3bd4b0dabbcc63a8e2277c2802ce45875bdbc"

    },
    { name: "Echha", src:"https://elements-resized.envatousercontent.com/envato-shoebox/6ea0/a36c-acd9-4d16-8616-0b53b8c245f5/1973057.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=61a89502e0d408e6aa2c3b094df812a6f8f54412779d3e23d33729c858083d33"

    },
    
]


let pers = "";
data.forEach(function(elem){
     pers  += `  
       <div class="person">
           <div class="img">
               <img src="${elem.src}" alt="${elem.name}">
           </div>
           <h4>${elem.name}</h4>
       </div>`;
});

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
    let matching = data.filter(function (e) {
        return e.name.toLowerCase().startsWith(input.value.toLowerCase().trim());
    });

    let newusers = "";
    matching.forEach(function (elem) {
        newusers += `  
          <div class="person">
              <div class="img">
                  <img src="${elem.src}" alt="">
              </div>
              <h4>${elem.name}</h4>
          </div>`;
    });
    document.querySelector(".people").innerHTML = newusers;
});




