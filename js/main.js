let countDisplay = document.querySelector('.count-display');
let inputField = document.querySelector('input');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');


let count = 0;

updateDisplay();

// let input = inputField.addEventListener("input", function(e) {
//     return input.value;
//     console.log(input);

// });

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