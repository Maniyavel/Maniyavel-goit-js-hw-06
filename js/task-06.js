const input=document.querySelector('#validation-input');
const inputLength=Number(input.getAttribute("data-length"));

input.addEventListener("blur", event => {
  if (event.target.value.length === inputLength) {
    input.classList.add("valid");

    
  } else {
    input.classList.add("invalid");
  }
});