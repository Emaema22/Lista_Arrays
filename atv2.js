const prompt = require('prompt-sync')();
 let numeros = [];
let pares = 0;
 for (let i = 0; i < 10; i++) {
    let numero = Number(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
 if (numero % 2 === 0) {
        pares++;
    }
}
 console.log("Números digitados:", numeros);
console.log("Quantidade de números pares:", pares);