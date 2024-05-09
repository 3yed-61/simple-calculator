// script.js
let currentInput = '';
let operator = null;
let previousInput = '';

function press(num) {
    currentInput += num;
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (!operator || !previousInput) return;
    let result = 0;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current !== 0) {
                result = prev / current;
            } else {
                result = "Error";
            }
            break;
    }
    document.getElementById('display').value = result;
    currentInput = result;
    operator = null;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    document.getElementById('display').value = '';
}

