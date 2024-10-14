const display = document.getElementById("display");

function AdicionarADisplay(input){
    display.value += input;
}

function LimparDisplay(){
    display.value = "";
}

function calcular(){
    try{
        display.value = eval(display.value)
    }
    catch(console){
        display.value = "Error";
    }
    
}