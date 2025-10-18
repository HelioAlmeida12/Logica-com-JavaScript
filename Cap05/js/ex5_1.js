const frm = document.querySelector("form") //Obtém elementos da página
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) =>{ //Escuta evento submit do form
    e.preventDefault() //evita envio do form
    const numero = Number(frm.inNumero.value)//obtém numero informado
    let resposta = "" //variavel do tipo string, para concatenar a resposta

    //cria um laço de repetição(i começa em 1 e é incrementado até 10)
    for(let i = 1; i <= 10; i++){
        //a variavel resposta vai acumulando os novos conteudo(nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n" 
        //resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }

    //o conteudo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})
