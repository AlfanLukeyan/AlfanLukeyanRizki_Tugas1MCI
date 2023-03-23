/* defines four simple functions that perform addition, subtraction, multiplication, and division respectively. */

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b; 
}

function division(a, b) {
    return a / b;
}

/* So that these functions can be used in other files, we export these functions using module.exports. */
module.exports = {
    add, subtract, multiply, division
};