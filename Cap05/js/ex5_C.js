const frm = document.querySelector("form")
const resp1 = document.querySelector("#outDivisores")
const resp2 = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) =>{
   e.preventDefault()

   const numero = Number(frm.inNumero.value)

   //como 1 é divisor universal, já iniciamos com ele
   let divisores = "Divisores do " + numero + ": 1"
   let soma = 1

   //percorre os possiveis divisores e acumula
   for(let i = 2; i <= numero / 2; i++){
      if(numero % i == 0){
         divisores = divisores + ", " + i
         soma = soma + i
      }
   }
   divisores = divisores + " (Soma: " + soma + ")"

   //altera o conteudo de outDivisores
   resp1.innerText = divisores

   //verifica se é perfeito e exibe resposta na tag outResposta
   if(numero == soma){
      resp2.innerText = `${numero} É um Número Perfeito`
   }else{
      resp2.innerText = `${numero} Não É um Número Perfeito`
   }

});