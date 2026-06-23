const prompt = require('prompt-sync')()

let produtos = []

produtos.push(prompt("Digite o 1º produto:"))
produtos.push(prompt("Digite o 2º produto:"))
produtos.push(prompt("Digite o 3º produto:"))
produtos.push(prompt("Digite o 4º produto:"))
produtos.push(prompt("Digite o 5º produto:"))

console.log("\nLista de produtos:")
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i])
}

produtos.push(prompt("\nDigite outro produto:"))

console.log("\nLista atualizada:")
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i])
}

console.log("\nQuantidade de produtos: " + produtos.length)
console.log("Primeiro produto: " + produtos[0])
console.log("Último produto: " + produtos[produtos.length - 1])