let result = document.querySelector("#result-form");
let process = document.querySelector("#process-form");
let firstOperand = [];
let secondOperand = [];
let operatorStore = '';
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equality = document.querySelector(".equal-to");
let clear = document.querySelector(".clear");
let removeDigit = document.querySelector(".delete");
let operatorError = new SyntaxError("Calculator can only accept one operator");
//store the numbers the users type
numbers.forEach(function(number,){
    number.addEventListener("click", function(e){
        if (operatorStore === ''){
            firstOperand.push(e.target.textContent); 
            process.value = firstOperand.join('');
        }
        else{
            secondOperand.push(e.target.textContent);
            let secondOpv = secondOperand[secondOperand.length - 1];
            process.value += secondOpv;
        }
    });
});
//store the operand the user types
operators.forEach(function(operator){
    operator.addEventListener('click', function(e){
        if(operatorStore === ''){
            operatorStore = e.target.textContent;
            process.value += e.target.textContent;
        }
        else if (operatorStore.length > 1){
            try {
                throw operatorError;
            }
            catch (e) {
                result.value = operatorError.message;
            }
        }
    });
});
//claculate the result
equality.addEventListener("click", function(e){
    let firstString = firstOperand.join('');
    let secondString = secondOperand.join('');
    let resolution;
    if (operatorStore === '+'){
        resolution = Number(firstString) + Number(secondString);
        result.value = resolution;
    }
    else if (operatorStore === '-'){
        resolution = Number(firstString) - Number(secondString);
        result.value = resolution;
    }
    else if (operatorStore === 'x'){
        resolution = Number(firstString) * Number(secondString);
        result.value = resolution;
    }
    else if (operatorStore === '÷'){
        resolution = Number(firstString) / Number(secondString);
        result.value = resolution;
    }
});
//clear everything
clear.addEventListener("click", function(e){
    result.value = 0;
    process.value = 0;
    operatorStore = '';
    firstOperand = [];
    secondOperand = [];
});
//delete last digit or operator
removeDigit.addEventListener("click", function(e){
    if (operatorStore === ""){
        firstOperand.pop();
        process.value = process.value.substring(0, process.value.length-1);
    }
    else if(secondOperand.length >= 1){
        secondOperand.pop();
        process.value = process.value.substring(0, process.value.length-1);
    }
    else if (secondOperand.length == 0){
        operatorStore = '';
        process.value = process.value.substring(0, process.value.length-1);
    }
    
});