console.log("hello World");

let digit = document.getElementById("digit");
let btn = document.getElementById("btn");
console.log(Number(digit));

console.log(digit);
console.log(btn);

btn.addEventListener("click", () => {
  digit.textContent = Number(digit.innerText) + 1;
});
