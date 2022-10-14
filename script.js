// Zugriff auf
const checkboxContainer = document.querySelector(".checkbox-container");
let inputFast = document.querySelector("#fast");
let inputCheap = document.querySelector("#cheap");
let inputGood = document.querySelector("#good");
let inputArray = [];

//EventListener
checkboxContainer.addEventListener("change", checkCheckbox);

function checkCheckbox(event) {
  if (event.target.checked === true && inputArray.length < 2) {
    inputArray.push(event.target);
  } else if (event.target.checked === false) {
    let filterArray = inputArray.filter(function (element) {
      return element.checked === true;
    });
    inputArray = filterArray;
  } else {
    event.target.checked = false;
  }
}
