const calculator = document.querySelector(".calculator");
const textBox = document.querySelector(".textBox");
const btn = document.querySelectorAll("#number");
const operator = document.querySelectorAll("#operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector('.clear');
let a = "";
let b = "";
let clickOperator;
let counter = 0;

//Get the number by clicking
btn.forEach((button) => {
  button.addEventListener("click", () => {
    textBox.textContent += button.className;

    //Assign the numbers to a and b
    if (counter === 0) {
      a += button.className;
      console.log("a is to " + a);
    } else {
      b += button.className;
      console.log("b is to " + b);
    }
  });
});

//get the operator
operator.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    textBox.textContent += button.className;
    clickOperator = button.textContent;
    //This will distinguish between a and b
    counter++;
  });
});

//Getting the equal sign
equal.addEventListener("click", () => {
  console.log(equal.textContent);
//turn a and b to integers
  a = parseFloat(a);
  b = parseFloat(b);
  append();
});

//formula for the operators
function add(a, b) {
  textBox.textContent = a+b;
}
function multiply(a, b) {
    textBox.textContent= a * b;
}
function divide(a, b) {
  if (b === 0) {
    textBox.textContent = "Error";
  } else {
    textBox.textContent= a / b;
  }
}
function subtract(a, b) {
    textBox.textContent= a - b;
}

//Switch case for the operators when clicked
function append() {
  switch (clickOperator) {
    case "+":
      add(a, b);
      console.log(a + b);
      break;
    case "-":
      subtract(a, b);
      console.log(a - b);
      break;
    case "x":
      multiply(a, b);
      console.log(a * b);
      break;
    case "/":
      divide(a, b);
      console.log(a / b);
      break;
    default:
      console.log("null is working");
      textBox.textContent = null;
      break;
  }
}

clear.addEventListener('click',()=>{
    textBox.textContent = ''
    location.reload();
})