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
    if (b === 0) {
        output.textContent = "Cannot / by 0";
        return 0;
    } else {
    return a / b;
}}
let a = 4;
let b = 12;
let answer = undefined;
function operate(a, b) {
    if (answer !== undefined) {
        a = answer;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    if (selectedOperator == "add") {
        answer = add(a, b);
    } else if (selectedOperator == "subtract") {
        answer = subtract(a, b);
    } else if (selectedOperator == "multiply") {
        answer = multiply(a, b);
    } else if (selectedOperator == "divide") {
        answer = divide(a, b);
    }
    if (answer.toString().length >= 13) {
        answer = answer.toString().slice(0, 13);
    }
    output.textContent = answer;

    operators.forEach(operator => {
        operator.style.backgroundColor = "rgb(184, 11, 184)";
    });
}

const output = document.querySelector(".output");
const numbers = document.querySelectorAll("#number");

numbers.forEach(number => {
    number.addEventListener('click', (e)=> {
        if (output.textContent == 0 && e.target.textContent == ".") {
            output.textContent = "0";
        } else if (output.textContent == "0.") {
            
        } else if (output.textContent == 0) {
            output.textContent = "";
        }
        if (output.textContent.length > 10 || (output.textContent.includes(".") && e.target.textContent == ".")) {
            return;
        }
        if (selectedOperator == undefined) {
            output.textContent += e.target.textContent;
            a = output.textContent;
        } else {
            output.textContent += e.target.textContent;
            b = output.textContent;
        }
        
    });
    
});

const zeros = document.querySelector('#zero');
zeros.addEventListener('click', (e)=> {
    if (output.textContent.length > 10) {
        return;
    }
    if (selectedOperator == undefined) {
        output.textContent += e.target.textContent;
        a = output.textContent;
    } else {
        output.textContent += e.target.textContent;
        b = output.textContent;
    }
});


let selectedOperator;
const operators = document.querySelectorAll("#ops");
operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (operator.style.backgroundColor == "rgb(184, 11, 184)") {
            operator.style.backgroundColor = "rgb(183, 11, 184)";
        }
        operators.forEach(operator => {
            if (operator.style.backgroundColor == "rgb(243, 12, 243)") {
                operator.style.backgroundColor = "rgb(184, 11, 184)";
            }
        });
        if (operator.style.backgroundColor == "rgb(183, 11, 184)"){
            operator.style.backgroundColor = "rgb(243, 12, 243)";
            selectedOperator = operator.value;
            output.textContent = "";
        } else {
            operator.style.backgroundColor = "rgb(184, 11, 184)";
            selectedOperator = undefined;

        }
    })
});

const clearer = document.querySelector('#clear');
clearer.addEventListener('click', (e)=> {
    output.textContent = 0;
    selectedOperator = undefined;
    operators.forEach(operator => {
        operator.style.backgroundColor = "rgb(184, 11, 184)";
    });
    answer = undefined;
});

const plusMinus = document.querySelector('#plusMinus');
plusMinus.addEventListener('click', (e)=> { 
    if (selectedOperator == undefined) {
        if (output.textContent.includes("-")) {
            let temp = output.textContent;
            output.textContent = temp.replace("-", "");
            return;
        }
        output.textContent = "-" + output.textContent;
        a = output.textContent;
    } else {
        if (output.textContent.includes("-")) {
            let temp = output.textContent;
            output.textContent = temp.replace("-", "");
            return;
        }
        output.textContent = "-" + output.textContent;
        b = output.textContent;
    }
});