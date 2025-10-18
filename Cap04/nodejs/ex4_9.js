const prompt = require("prompt-sync")() //adiciona pacote prompt-sync
const numero = Number(prompt("Número(centena): "))
if(numero < 100 || numero >=1000){
    console.log("Erro... Deve ser uma centena")
    return
}

const num1 = Math.floor(numero / 100)
const sobra = numero % 100
const num2 = Math.floor(sobra / 10)
const num3 = sobra % 10
console.log(`Iverido: ${num3}${num2}${num1}`)