alert("Digite 0 para sair")
do {
   const num = Number(prompt("Numéro: "))
   if(num == 0 || isNaN(num)){
     const sair = confirm("Confirmar saída?")
     if(sair){
        break //sai da repetição
     }else{
        continue //volta ao inicio do laço
     }
}
if(num % 2 == 0){ //se par,
    alert(`O dobro de ${num} é: ${num * 2}`)//mostra o dobro
}else{
    alert(`O triplo de ${num} é: ${num * 3}`)
    }
}while(true) //enquanto verdade(só sai do laço, pelo break)
alert("bye, bye")

