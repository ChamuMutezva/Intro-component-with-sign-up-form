let submit = document.getElementById("submitDetails");
console.log(submit.value);
let inputs = Array.from(document.querySelectorAll(".details"));
let decorators = Array.from(document.querySelectorAll("label"));
//console.log(decorators);
for (let deco of decorators) {
    console.log(deco.innerText);
    
    deco.style.opacity = 0;
}

submit.addEventListener("click", function () {
    //console.log(this);
    for (let input of inputs) {        
        if (input !== this) {
            
            //input.labels.css.style.opacity = 0;          
            
        }
    }
})