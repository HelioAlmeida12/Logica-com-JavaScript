const prompt = require("prompt-sync")()

const salario = Number(prompt("Qual o salario: "))
const tempoEmpresa = Number(prompt("Quanto tempo de empresa: "))
const quadrienios = Math.floor(tempoEmpresa / 4)
const acrescimo = salario * quadrienios / 100
console.log(`Quadrienios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`)
