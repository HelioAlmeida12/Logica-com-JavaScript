let num //declara variavel num com let, pois ela pode ser alterada
        //e será acessada fora do bloco do...while
do{
    num = Number(prompt("Numero: "))//Lê um número
    if(num == 0 || isNaN(num)){//se num=0 ou é invalido
        alert("Digite um número válido...")
    }
}while(num == 0 || isNaN(num))//...enqando num=0 ou é invalido
let pares = `Pares entre 1 e ${num}: `//string que irá conter a resposta
for(let i = 2; i <= num; i = i + 2){
    pares = pares + i + ", "
}
alert(pares)//exibe lista dos números pares