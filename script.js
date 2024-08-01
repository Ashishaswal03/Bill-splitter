const billInput = document.querySelector("#first-inpt");
const customInput = document.querySelector("#custom-input");
const numberOfPeople = document.querySelector("#People");
const billBtn = document.querySelector(".bill-btn");
const allbuttons = document.querySelectorAll(".section");
const form = document.querySelector("form");
const people = document.querySelector("#People");
const totalSpan = document.querySelector("#total");
const tipSpan = document.querySelector("#tip-amount");
const eachPersonSpan = document.querySelector("#each");
const resetBtn = document.querySelector(".reset-btn");

let tip = 0;
// let customValue = 0;
let customVal = 0;
let numOfPeople = 0;

allbuttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tip = parseInt(btn.innerHTML);
    allbuttons.forEach(button => button.classList.remove('selected'));
    btn.classList.add("selected")
    customInput.value=""
  });
});

function displayValue(tip, bill, NumOFPeople) {
  let tipAmount = ((bill * tip) / 100).toFixed(2);

  let tipAmountNum = parseFloat(tipAmount);
  let billNum = parseFloat(bill);

  let totalAmount = (tipAmountNum + billNum).toFixed(2);
  if (isNaN(NumOFPeople)) {
    eachPersonSpan.innerHTML = "0.00";
    console.log("nan");
  } else {
    let eachPerson = (totalAmount / NumOFPeople).toFixed(2);
    eachPersonSpan.innerHTML = eachPerson;
  }

  tipSpan.innerHTML = tipAmount;
  totalSpan.innerHTML = totalAmount;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userInptVal = parseFloat(billInput.value);

  tip = parseFloat(customInput.value || 0);

  numOfPeople = parseInt(people.value);
  //  console.log(numOfPeople);

  // let actualTip = parseFloat(tip + customVal);

  displayValue(tip, userInptVal, numOfPeople);
});
customInput.addEventListener('input',()=>{
  allbuttons.forEach(button => button.classList.remove('selected'));

})

resetBtn.addEventListener("click", () => {
  eachPersonSpan.innerHTML = "";
  tipSpan.innerHTML = "";
  totalSpan.innerHTML = "";
  customInput.value = "";
  billInput.value = "";
  people.value = "";
  allbuttons.forEach(button => button.classList.remove('selected'));
});
