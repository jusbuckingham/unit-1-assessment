let input = 1;
let count = 0;
let input = document.querySelector('.input');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');


updateInput();

plusButton.addEventListener("click",function (e) {
    count++;
    updateInput();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateInput();
});

function updateInput(){
    counterDisplayElem.innerHTML = count;
};