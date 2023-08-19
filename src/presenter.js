import esBisiesto from "./esBisiesto.js";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  if(esBisiesto(firstNumber)==true){
    div.innerHTML = "<p> SI es bisiesto </p>";
  }else{
    div.innerHTML = "<p>NO es bisiesto </p>";
  }
  
});
