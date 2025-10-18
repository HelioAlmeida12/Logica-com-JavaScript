const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//Cria um ouvinte de evento
frm.addEventListener("submit", (e) =>{
    const medicamento = frm.inMedic.value 
    const preco = Number(frm.inPreco.value) 

    const total = Math.floor (preco * 2)
    
    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$ ${total.toFixed(2)}`

    e.preventDefault()
})