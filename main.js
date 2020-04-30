let submit = document.getElementById("submitDetails");
console.log(submit.value);
let inputs = Array.from(document.querySelectorAll(".details"));
let decorators = Array.from(document.querySelectorAll("label"));
const form = document.querySelector(".form");
console.log(form)

form.addEventListener("submit", (event)=> {
   event.preventDefault();
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;
    const email = form["emailDetails"].value;
    const pass = form["pass"].value;
    console.log(firstName, lastName);

    if (firstName.trim() === "") {
        console.log("name cannot be blank");
        form["firstName"].classList.add("invalidClass");
    } else {
        console.log("name is ", firstName)
    }
})
      

