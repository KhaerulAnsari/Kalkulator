const calculator = {
    displayNumber : '0',
    operator : null,
    firsNumber : null,
    waitingForSecondNumber : false
} ;

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firsNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {

    if(calculator.waitingForSecondNumber && calculator.firsNumber === calculator.displayNumber){
        calculator.displayNumber = digit;
    }else{
        if(calculator.displayNumber === '0'){
            calculator.displayNumber = digit;
        } else {
            calculator.displayNumber += digit;
        }
    }
    
}

function inversNumber() {
    if(calculator.displayNumber === '0'){
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator){
    if(!calculator.waitingForSecondNumber){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firsNumber = calculator.displayNumber;
    }else{
        alert("Operator Sudah Di Tetapkan");
    }
}

function performCalculation() {
    if(calculator.firsNumber == null || calculator.operator == null){
        alert("Anda belum menetapkan operator");

    }

    let result = 0;
    if (calculator.operator === '+'){
        result = parseInt(calculator.firsNumber) + parseInt(calculator.displayNumber);
    }else{
        result = parseInt(calculator.firsNumber) - parseInt(calculator.displayNumber)
    }

    calculator.displayNumber = result;
}

const buttons = document.querySelectorAll(".button");

for( button of buttons){
    button.addEventListener('click', function(event){

        //Mendapatkan object elemen yang diklik
        const target = event.target;

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return;
        }

        if(target.classList.contains('negative')){
            inversNumber();
            updateDisplay();
            return;
        }

        if(target.classList.contains('equals')){
            performCalculation();
            updateDisplay();
            return;
        }

        if(target.classList.contains('operator')){
            handleOperator(target.innerText);
            updateDisplay();
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}