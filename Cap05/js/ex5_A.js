const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
   e.preventDefault()
   const fruta = frm.inFruta.value
   const numero = Number(frm.inNumero.value)
   
   //variavel qie vai acumular o número repetido das frutas
   let resposta = ""

   //cria uma repetição e...
   for(let i = 1; i < numero; i++){
      //...a cada volta, adiciona uma fruta e o " * "
      resposta = resposta + fruta + " * "
   }
   //A última fruta é acrescentada, sem o * no final
   resp.innerText = resposta + fruta
})


