const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e)=>{//escuta evento submit do form
    e.preventDefault()//evita o envio do form
    const saque = Number(frm.inSaque.value)//Obtem o valor do saque
    if(saque % 10 != 0){ //"Se o valor de saque dividido por 10 tiver resto diferente de zero, então..."
        alert("Valor inválido para notas disponíveis (R$ 10, R$ 50, R$ 100)")
        frm.inSaque.focus()
        return
    }
    
    const notasCem = Math.floor(saque/100) //calcula notas de 100
    var resto = saque % 100
    const notasCinquenta = Math.floor(resto / 50)
    var resto = resto % 50
    const notasDez = Math.floor(resto / 10)

    if(notasCem > 0){
     resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }

    if (notasCinquenta > 0){
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`
    }

    if(notasDez > 0){
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }
})