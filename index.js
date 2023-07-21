 document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    let firstElement;
    let secondElement;
    let firstNumber = null;
    let operator = null;

    const add = function(num1,num2){
        let number = num1 + num2;
        screen.textContent = number;
    }

    const subtract = function (num1, num2){
        let number = num1 - num2;
        screen.textContent = number;
    }

    const multiply = function ( num1,num2){
        let number = num1*num2;
        screen.textContent = number;
    }

    const divide = function (num1,num2){
        let number = num1/num2;
        screen.textContent = number;
    }

    function operate(int1,int2){
        if (operator === "/"){
            divide(int1,int2);
        }else if ( operator === '+'){
            add(int1,int2);
        }else if (operator ==='-'){
            subtract(int1,int2);
        }else if (operator ==='*'){
            multiply(int1,int2);
        }
    }
    
    const equalSimbol = document.querySelector('.equal');
    equalSimbol.addEventListener('click', () => {
        secondElement = firstNumber;
        let int1 = getNumber(firstElement);
        let int2 = getNumber(secondElement);
        operate(int1,int2)
    });

    const simbolbtn = document.querySelectorAll('.simbol');
    simbolbtn.forEach(button =>{
        button.addEventListener('click', () => {
            let smb = button.textContent;
            operator = smb;
            screen.textContent = operator;
            startSecondNumber();
        });
    });

    function startSecondNumber(){
        firstElement = firstNumber;
        firstNumber = null;
    }

    const btn7 = document.querySelector('#button7');
    btn7.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '7';
        }else{
            firstNumber += '7';
        }
        screen.textContent=firstNumber;
    });

    const btn9 = document.querySelector('#button9');
    btn9.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '9';
        }else{
            firstNumber += '9';
        }
        screen.textContent=firstNumber;

    });

    const btn8 = document.querySelector('#button8');
    btn8.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '8';
        }else{
            firstNumber += '8';
        }
        screen.textContent=firstNumber;
    });

    const btn4 = document.querySelector('#button4');
    btn4.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '4';
        }else{
            firstNumber += '4';
        }
        screen.textContent=firstNumber;
    });

    const btn5 = document.querySelector('#button5');
    btn5.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '5';
        }else{
            firstNumber += '5';
        }
        screen.textContent=firstNumber;
    });

    const btn6 = document.querySelector('#button6');
    btn6.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '6';
        }else{
            firstNumber += '6';
        }
        screen.textContent=firstNumber;
    });

    const bt1 = document.querySelector('#button1');
    bt1.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '1';
        }else{
            firstNumber += '1';
        }
        screen.textContent=firstNumber;
    });

    const btn2 = document.querySelector('#button2');
    btn2.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '2';
        }else{
            firstNumber += '2';
        }
        screen.textContent=firstNumber;
    });

    const btn3 = document.querySelector('#button3');
    btn3.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '3';
        }else{
            firstNumber += '3';
        }
        screen.textContent=firstNumber;
    });

    const btn0 = document.querySelector('#numberZero');
    btn0.addEventListener('click', () => {
        if (firstNumber === null){
            firstNumber = '0';
        }else{
            firstNumber += '0';
        }
        screen.textContent=firstNumber;
    });

    function getNumber(StringNumber){
        let floatNumber = parseFloat(StringNumber);
        return floatNumber;
    }
});