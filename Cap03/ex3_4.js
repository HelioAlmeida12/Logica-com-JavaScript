const prompt = require("prompt-sync")()

const pesoKg = Number(prompt("Peso da ração (KG): ")) //2KG
const consumo = Number(prompt("Consumo diário (gr)")) //300GR
const pesoGr = pesoKg * 1000                          //2000GR (Transformou KG em GR)
const duracao = Math.floor(pesoGr / consumo)          
const sobra = pesoGr % consumo 
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra} gr`)



