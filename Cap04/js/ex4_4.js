const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    //obtém e converte o conteudo com campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5 //Calcula o horario na frança
    if(horaFranca > 24) {  //Se passar das 24 horas na frança
        horaFranca = horaFranca - 24 //...subtrai 24
    }

    //exibre a resposta
    resp.innerText = `Hora na frança ${horaFranca.toFixed(2)}`
})