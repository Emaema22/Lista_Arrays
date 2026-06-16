const prompt = require("prompt-sync")();
let numeros = [];
let positivos = 0;

for(i=0; i<6; i++){
    numeros[1] = Number(prompt("Informe um número:"));
if(numeros[1]>0){
 positivos++;
}
}
console.log(positivos)