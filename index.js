 document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
     
    const equalSimbol = document.querySelector('.equal');
    equalSimbol.addEventListener('click', () => {
       const result = eval(calculator);
       screen.textContent = result;
    });

    let calculator = '';
    const elementbtns = document.querySelectorAll('.element');
    elementbtns.forEach(buttons =>{
        buttons.addEventListener('click', () =>{
            let text = "";
            text = buttons.textContent;
            screen.textContent += text
            calculator += text;
        });
    });

    const cleanButton = document.querySelector('.clean');
    cleanButton.addEventListener('click', () => {
        screen.textContent = "";
        calculator = '';
        result  = null;
    });
});