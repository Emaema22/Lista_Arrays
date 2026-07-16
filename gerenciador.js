const prompt = require('prompt-sync')()

let produtos = []
let TemProduto;

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
console.log(produtos)
produtos.pop(prompt("O último produto foi removido, olhe:"))
console.log("Lista: " + produtos)
console.log("Quantidade de produtos: " + produtos.length)
produtos.shift(prompt("Primeiro produto removido.")) 
console.log("Veja a lista atual: " + produtos)
produtos.unshift(prompt("Adicione um produto para ficar em primeiro: "))
console.log("Veja a lista atual: " + produtos)
TemProduto = prompt("\nQual produto você deseja procurar? Digite: ")
if(produtos.includes(TemProduto)){
    console.log("Existe na lista!")
} else {
    console.log("Não existe na lista.")
}
console.log("Esse é seu primeiro produto da lista: " + produtos[0])
console.log("Esse é seu último produto da lista: " + produtos[produtos.length - 1])

console.log("\nQuantidade de produtos: " + produtos.length)