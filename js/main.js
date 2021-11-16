let countDisplay = document.querySelector('.count-display');
let inputField = document.querySelector('input').value;
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');

// let input = inputField.addEventListener('input', () => {
//     return inputField;

// });

let count = 0;

updateDisplay();


plusButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});

minusButton.addEventListener("click", () => {
    count--;
    updateDisplay();
});

function updateDisplay() {
    countDisplay.innerHTML = count;
};

// function myFunction() {
//     document.getElementById(".input").value = "1";
// }