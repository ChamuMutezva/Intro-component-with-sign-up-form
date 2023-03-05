let submit = document.getElementById("submitDetails");
console.log(submit.value);
let inputs = Array.from(document.querySelectorAll(".inputs"));
let decorators = Array.from(document.querySelectorAll("label"));
const form = document.querySelector(".form");
console.log(form);

inputs.map((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("focus");
    input.closest("div").classList.add("active");
  });
  input.addEventListener("blur", () => {
    input.classList.remove("focus");
    if (input.value.trim() === "") {
      input.closest("div").classList.remove("active");
      input.nextElementSibling.classList.add("errorDisplay");
      input.nextElementSibling.innerHTML = `${input.name} cannot be empty`;
    } else {
      input.nextElementSibling.classList.remove("errorDisplay");
      input.nextElementSibling.innerHTML = "";
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  inputs.forEach((input) => {  

    if (input.value.trim("") === "") {
      console.log(input.name);
      input.nextElementSibling.classList.add("errorDisplay");
      input.nextElementSibling.innerHTML = `${input.name} cannot be empty`;   
      input.classList.add("invalidClass")  
    } else {     
      input.nextElementSibling.classList.remove("errorDisplay");
      input.nextElementSibling.innerHTML = "";    
      input.classList.remove("invalidClass")  
    }

    if (input.name === "email") {     
      if (input.value.match(mailformat)) {
        return;
      } else {
        input.nextElementSibling.classList.add("errorDisplay");
        input.nextElementSibling.innerHTML = `incorrect ${input.name} format`;       
      }
    }
  });
});

