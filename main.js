let submit = document.getElementById("submitDetails");
console.log(submit.value);
let inputs = Array.from(document.querySelectorAll(".inputs"));
let decorators = Array.from(document.querySelectorAll("label"));
const form = document.querySelector(".form");
console.log(form);

inputs.map((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("focus")
    input.closest("div").classList.add("active")
  });
  input.addEventListener("blur", () => {
    input.classList.remove("focus")
    if (input.value.trim() === "") {
        input.closest("div").classList.remove("active")
    }
    
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("Form action");
  //console.log(event);
  inputs.forEach((input) => {
    console.log(input);

    if (input.value == "") {
      //  console.log(input)
      //  input.setCustomValidity("First Name can not be blank")
      input.nextElementSibling.classList.add("errorDisplay");
      input.nextElementSibling.innerHTML = `${input.name} cannot be empty`;
    } else {
      // input.setCustomValidity("")
      input.nextElementSibling.classList.remove("errorDisplay");
      input.nextElementSibling.innerHTML = "";
    }
  });
});

//***************************************** */
/* let invalidClassName = "invalid";
inputs.forEach(function (input) {
    // Add a css class on submit when the input is invalid.
    input.addEventListener('invalid', function () {
        input.classList.add(invalidClassName);
    })
    // Remove the class when the input becomes valid.
    // 'input' will fire each time the user types
    input.addEventListener('input', function () {
        if (input.validity.valid) {
            input.classList.remove(invalidClassName);
        }
    })
})

submit.addEventListener("click", function () {
    //console.log(this);
    for (let input of inputs) { 
        
        if (input !== this) {       
            
            console.log(input.value.length);
            if (input.value.length < 1) {

                // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                for (let deco of decorators) {
                    if (deco.hasAttribute("for")) {
                        if (input.getAttribute("id") === deco.getAttribute("for")) {
                            console.log(deco.getAttribute("for"));
                            deco.style.opacity = 1;
                           // if (input.value.length < 1) {
                           input.setCustomValidity(`${input.getAttribute("placeholder")} cannot be empty`);
                            deco.innerHTML = (`${input.getAttribute("placeholder")} cannot be empty`);
                           // input.style.border = "1px solid red";
                            //console.log(input.getAttribute("id"));
                        }
                         
                    }
                    deco.style.opacity = 1;
                }
                

        // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
               // console.log(input.getAttribute("id"));
               // console.log(deco.getAttribute("for"));
               // input.setCustomValidity("error");
            }
         else {
                for (let deco of decorators) {
                    if (deco.hasAttribute("for")) {
                        if (input.getAttribute("id") === deco.getAttribute("for")) {
                            console.log(deco.getAttribute("for"));
                            deco.style.opacity = 1;
                            // if (input.value.length < 1) {
                            input.setCustomValidity("");
                            deco.innerHTML = ("");
                            
                        }

                    }
                    deco.style.opacity = 0;
                }
                
        }

           // input.labels.style.opacity = 0;          
            
        }
    }
}) */
