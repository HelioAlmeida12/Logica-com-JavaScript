const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    //obtém o nome informado e retira espaços em branco do inicio e final da string
    const nome = frm.inFuncionario.value.trim()

    if(!nome.includes("")){//se o nome não (!) possuir espaço
        alert("Informe o nome completo...")
        return
    }

    const priEspaco = nome.indexOf(" ") //posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" ") //posição do ultima espaço
    //copia nome e sobrenome usando os parâmetros do substr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `Crachá: ${cracha}` //exibe a resposta
})