const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
   e.preventDefault()
   
   //obtém os dados de entrada
   const chin = Number(frm.inNumChin.value)
   const anos = Number(frm.inAnos.value)

   //cria uma váriavel do tipo string, que irá concatenar a resposta
   let resposta = ""
   let total = chin

   //define o laço de repetição
   for(let i = 1; i <= anos; i++){
      resposta = resposta + i + "° Ano: " + total + " Chinchiças\n"
      total = total * 3
   }

   //altera o contéudo da tag de resposta
   resp.innerText = resposta
})