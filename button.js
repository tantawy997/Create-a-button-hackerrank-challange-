let button = document.getElementById("btn");
let value = 0;

button.addEventListener("click", function onClick() {
  value += 1;
  button.innerHTML = value;
});

console.log(button);
