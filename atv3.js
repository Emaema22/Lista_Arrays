const prompt = require('prompt-sync')();
let filmes = [];
 for (let i = 0; i < 5; i++) {
    filmes.push(prompt("Digite um filme: "));

 }
console.log("O primeiro filme digitado:", +filmes[0]);
console.log("O ultimo filme digitado:" +filmes [filmes.length - 1]);
console.log("Todos os filmes: " +filmes)
console.log("Quantidade de filmes cadastrados: " + filmes.length)