const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) =>{ //escuta eventoU submit do form
    e.preventDefault() //evita envio do form
    const fruta = frm.inFruta.value.toUpperCase() //conteudo do campo em maiusculas
    let resposta = "" //string que ira conter a resposta

    for(const letra of fruta){ //percorre todos os caracteres da fruta
        if(letra == fruta.charAt(0)){ //se letra igual a letra inicial da string...
            resposta += fruta.charAt(0) //adiciona a letra inicial
        }else{
            resposta += "_" //adiciona o sublinhado
        }
    }

    resp.innerText = resposta //exibe a resposta
    frm.inFruta.value = "*".repeat(fruta.length) //preenche com "*", conforme tamanho
})