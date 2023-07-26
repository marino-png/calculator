 document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    let firstNumber = null;
    let secondNumber = null;
    let result = null;
     
    const equalSimbol = document.querySelector('.equal');
    equalSimbol.addEventListener('click', () => {
        operation();
    });

    function operation(){
        secondNumber = getIntNumber(SecondStringNumber);
       switch (operator){
            case "+": result = add(firstNumber,secondNumber);break;
            case "-": result = subtract(firstNumber,secondNumber);break;
            case "*": result = multiply(firstNumber,secondNumber);break;
            case "/": result = divide(firstNumber,secondNumber);break;
       }
        screen.textContent = result;
        firstNumber = result;
        secondNumber = null;
        FirstStringNumber ='';
        SecondStringNumber ='';
    }

    let FirstStringNumber = "";
    let SecondStringNumber = "";
    const elementbtns = document.querySelectorAll('.element');
    elementbtns.forEach(buttons =>{
        buttons.addEventListener('click', () =>{
            let text = "";
            text = buttons.textContent;
            if(firstNumber === null){
                FirstStringNumber += text;
            } else {
                SecondStringNumber += text;
            }
            screen.textContent += text;
        });
    });

    let operator = "";
    const operetorbtn = document.querySelectorAll('.operator');
    operetorbtn.forEach(buttons =>{
        buttons.addEventListener('click', () =>{
            let text = "";
            text = buttons.textContent;
            if (operator !== ""){
                operation();
                operator = text;
            }
            operator = text;
            if(firstNumber === null){
                firstNumber = getIntNumber(FirstStringNumber);
            }
            screen.textContent = '';
        });
    });

    const cleanButton = document.querySelector('.clean');
    cleanButton.addEventListener('click', () => {
        screen.textContent = "";
        result  = null;
        firstNumber = null;
        secondNumber = null;
        FirstStringNumber = "";
        SecondStringNumber = "";
        operator = "";
    });

    function getIntNumber(String){
        return parseFloat(String);
    }

    function add(num1,num2){
        return num1 + num2;
    }

    function subtract(num1,num2){
        return num1 - num2;
    }

    function multiply(num1,num2){
        return num1 * num2;
    }

    function divide(num1,num2){
        return num1 / num2;
    }
});