const add = function(num1,num2){
    let number = num1 + num2;
    return number;
}

const subtract = function (num1, num2){
    let number = num1 - num2;
    return number;
}

const multiply = function ( num1,num2){
    let number = num1*num2;
    return number;
}

const divide = function (num1,num2){
    let number = num1/num2;
    return number;
}

let firstNumber;
let operator;
let secondNumber;

function operate(){
    if (operator === "/"){
        divide(firstNumber,secondNumber);
    }else if ( operator === '+'){
        add(firstNumber,secondNumber);
    }else if (operator ==='-'){
        subtract(firstNumber,secondNumber);
    }else if (operator ==='*'){
        multiply(firstNumber,secondNumber);
    }
}