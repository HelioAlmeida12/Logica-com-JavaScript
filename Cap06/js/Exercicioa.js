const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = [] //declara vetor global

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inClube.value
    clubes.push(nome) //adiciona o nome no final do vetor
    frm.btListar.dispatchEvent(new Event ("click"))//dispara click em btListar
    //limpa campo e posiciona cursor em inCLube
    frm.inClube.value = ""
    frm.inClube.focus()
})

frm.btListar.addEventListener("click", () =>{  
    //verifica se vetor clubes está vazio 
    if(clubes.length == 0){
        alert("Não há clube na lista")
        inClube.focus()
        return
    }
    let lista = "" //string para concatenar clubes
    for(const clube of clubes){
        lista += clube + "\n"
    }
    //exibe a lista
    resp.innerText = lista
})

frm.btMontarTabela.addEventListener("click", () => {
    const tam = clubes.length

    //verifica se vetor clubes está vazio ou tamanho ímpar
    if(tam == 0 || (tam % 2 == 1)){
        alert("Deve haver número par de clubes")
        frm.inClube.focus()
        return
    }

    //string para concatenar jogos
    let jogos = ""

    const ultimo = tam - 1

    //percorre os elementos do vetor
    for(i = 0; i < tam / 2; i++){
        jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n"
    }

    //altera o conteudo da tag outLista
    resp.innerText = jogos
})