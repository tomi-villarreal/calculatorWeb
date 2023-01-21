
const textScreen = document.querySelector(".calculator-screen");
const buttonEqual = document.querySelector("#button-equal");
const button0 = document.querySelector("#button-0");
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const button4 = document.querySelector("#button-4");
const button5 = document.querySelector("#button-5");
const button6 = document.querySelector("#button-6");
const button7 = document.querySelector("#button-7");
const button8 = document.querySelector("#button-8");
const button9 = document.querySelector("#button-9");
const buttonPlus = document.querySelector("#button-plus");
const buttonMinus = document.querySelector("#button-minus");
const buttonX = document.querySelector("#button-x");
const buttonAC = document.querySelector("#button-ac");
const buttonDiv = document.querySelector("#button-div");

let operacion = "";

//Funcion para cambiar el valor de la pantalla
function printScreen(number) {
    textScreen.innerHTML += number;
}

//Todos los listener cuandos presionamos click en cada una de las teclas

const input = document.querySelector('input');
const log = document.getElementById('log');
document.addEventListener('keydown', logKey);
const arrayNumber = ["1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9", "Digit1"];

function logKey(e) {
    let val = e.code;
    val = val.toString();
    val = val.slice(-1);
    printScreen(val);
    }

buttonEqual.addEventListener("click", ()=>{
    let resultado = eval(operacion);
    console.log(resultado);
    textScreen.innerHTML = resultado;
    operacion="";
})

button0.addEventListener("click", ()=>{
    operacion+="0";
    printScreen("0");
})

button1.addEventListener("click", ()=>{
    operacion+="1";
    printScreen("1");
})

button2.addEventListener("click", ()=>{
    operacion+="2";
    printScreen("2");
})

button3.addEventListener("click", ()=>{
    operacion+="3";
    printScreen("3");
})

button4.addEventListener("click", ()=>{
    operacion+="4";
    printScreen("4");
})

button5.addEventListener("click", ()=>{
    operacion+="5";
    printScreen("5");
})

button6.addEventListener("click", ()=>{
    operacion+="6";
    printScreen("6");
})

button7.addEventListener("click", ()=>{
    operacion+="7";
    printScreen("7");
})

button8.addEventListener("click", ()=>{
    operacion+="8";
    printScreen("8");
})

button9.addEventListener("click", ()=>{
    operacion+="9";
    printScreen("9");
})

buttonPlus.addEventListener("click", ()=>{
    operacion+="+";
    printScreen("+");
})

buttonMinus.addEventListener("click", ()=>{
    operacion+="-";
    printScreen("-");
})

buttonX.addEventListener("click", ()=>{
    operacion+="*";
    printScreen("x");
})

buttonAC.addEventListener("click", ()=>{
    operacion="";
    textScreen.innerHTML="";

})

buttonDiv.addEventListener("click", ()=>{
    operacion+="/";
    printScreen("/");

})


