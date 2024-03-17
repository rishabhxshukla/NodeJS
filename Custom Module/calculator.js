function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function joinTwoNumbers(a, b) {
    let ans = Number.parseInt(a + "" + b);
    return (ans);
}


//Exporting functions :
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    join: joinTwoNumbers
};