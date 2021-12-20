function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let b = 12;
function operate(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if (selectedOperator == "add") {
        output.textContent = add(a, b);
    } else if (selectedOperator == "subtract") {
        output.textContent = subtract(a, b);
    } else if (selectedOperator == "multiply") {
        output.textContent = multiply(a, b);
    } else if (selectedOperator == "divide") {
        output.textContent = divide(a, b);
    }
}

const output = document.querySelector(".output");
const numbers = document.querySelectorAll("#number");

numbers.forEach(number => {
    number.addEventListener('click', (e)=> {
        if (output.textContent == 0) {
            output.textContent = "";
        }
        if (output.textContent.length > 10) {
            return;
        }
        output.textContent += e.target.textContent;
        a = output.textContent;
    });
    
});

const zeros = document.querySelector('#zero');
zeros.addEventListener('click', (e)=> {
    if (output.textContent == 0 || output.textContent.length > 10) {
        return;
    }
    output.textContent += e.target.textContent;
    a = output.textContent;
});


let selectedOperator;
const operators = document.querySelectorAll("#ops");
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        operator.style.backgroundColor = "rgb(243, 12, 243)";
        selectedOperator = operator.value;
    })
});

const clearer = document.querySelector('#clear');
clearer.addEventListener('click', (e)=> {
    output.textContent = 0;
});

const plusMinus = document.querySelector('#plusMinus');
plusMinus.addEventListener('click', (e)=> {
    if (output.textContent.includes("-")) {
        let temp = output.textContent;
        output.textContent = temp.replace("-", "");
        return;
    }
    output.textContent = "-" + output.textContent;
});