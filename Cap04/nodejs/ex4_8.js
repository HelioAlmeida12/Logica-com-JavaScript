const prompt = require("prompt-sync")() //adiciona pacote prompt-sync
const valor =  Number(prompt("Valor da compra R$: "))
const aux = Math.floor(valor / 20) //aux - n° de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
/** 
 * essa linha de código ternario equivale a essa condição em IF ..Else
 * 
let parcelas
if(aux == 0){
    parcelas = 1    
}else if(aux > 6){
    parcelas = 6
}
  
*/
const valorParcela = valor / parcelas
console.log(`Pode pagar em ${parcelas} x de R$: ${valorParcela.toFixed(2)}`)
