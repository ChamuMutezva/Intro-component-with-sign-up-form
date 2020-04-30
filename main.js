let submit = document.getElementById("submitDetails");
console.log(submit.value);
let inputs = Array.from(document.querySelectorAll(".details"));
let decorators = Array.from(document.querySelectorAll("label"));
const form = document.querySelector(".form");
console.log(form)

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log(event);
})
      

