// S19-05-24 03:00 p.m
// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        const expression = display.value;
        if (/\/0(?![\d.])/.test(expression)) {
            throw new Error("Error: division by zero");
        }
        display.value = eval(expression);
    }catch(error){
        display.value = error.message;
    }
}