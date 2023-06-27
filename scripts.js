//selecionar os elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-bnt");
const messageElement = document.querySelector("#message");

//Função para convereter as unidades
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;
    
    if (fromValue === toValue) {
        outputElement.value = inputElement.value;
        messageElement.textContent="";
        return;
    }

 //converter a entrada para metros
let meters;
switch(fromValue) {
 case "m":
    meters = inputElement.value ;
    break;
 case "km":
    meters = inputElement.value * 1000;
    break;
 case "cm":
    meters = inputElement.value / 100;
    break
 case "mm":
    meters = inputElement.value / 1000;
    break;
 }

 // converter metros para unidades de saida
 let result;
 switch(toValue) {
  case "m":
     result = meters;
     break;
  case "km":
     result = meters / 1000;
     break;
  case "cm":
     result = meters * 100;
     break;
  case "mm":
     result = meters * 1000;
     break; 
    
 }
    console.log(fromValue, toValue);
    console.log(meters, result);
}

 convertButton.addEventListener("click", convert);