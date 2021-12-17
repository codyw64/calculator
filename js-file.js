function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a ,b) {
    return a / b;
}





const numbers = document.querySelectorAll("#number");
numbers.forEach(number => {
    number.addEventListener('click', (e)=> {
    console.log(e.target.value);
    });
});

const zeros = document.querySelector('#zero');
zeros.addEventListener('click', (e)=> {
    console.log(e.target.value);
});

