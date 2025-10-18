//Cria referencia ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    //const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)
    //Esse é o operador ternario, a condição IF ELSE poderia ser substituida por ele


    let peso //Declara a variavel peso
    if(masculino){
        peso = 22 * Math.pow(altura, 2) //Math.pow() eleva ao quadrado
    }else{
        peso = 21 * Math.pow(altura, 2)
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} KG`
})

frm.addEventListener("reset", () =>{
    resp.innerText = "" //Limpa o conteudo do elemento h3 que exibe a resposta
})