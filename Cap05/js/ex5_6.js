const frm = document.querySelector("form") //Obtém elementos da página
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{ //"Escuta" evento submit do form
   e.preventDefault() //evita envio do form
   const num = Number(frm.inNumero.value) //Obtém número informado
   let temDivisor = 0 //declara e inicializa contador
   for (let i = 2; i <= num / 2; i++){ //percorre todos os possiveis divisores de num
      if (num % i == 0){ //verifica se i(1, 2, 3...) é divisor do num
         temDivisor = 1 //muda a flag
         break //sai da repetição
      }
   }
   if (num > 1 && !temDivisor){ //se num > 1 e não possui divisor
      resp.innerText = `${num} É primo`
   } else {
      resp.innerText = `${num} Não é primo`
   }
})

