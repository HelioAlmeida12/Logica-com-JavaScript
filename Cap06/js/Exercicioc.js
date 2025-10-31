const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const nome =  frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)

    //adiciona dados e posiciona cursor em inNome
    candidatos.push({nome, acertos})

    //limpa campos e posiciona cursor em inNome
    frm.inCandidato.value = ""
    frm.inAcertos.value = ""
    frm.inCandidato.focus()

    //dispara click em btListar
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () =>{
    //verifica se vetor está vazio
    if(candidatos.length == 0){
        alert("Não há candidatos na lista")
        return
    }

    let lista = "" //para concatenar lista de candidatos

    //percorre os elementos do vetor
    for(const candidato of candidatos){
        lista += candidato.nome + " - " + candidato.acertos + " acertos\n"
    }

    //exibe a lista
    resp.innerText = lista
})

frm.btAprovados.addEventListener("click", () =>{
    //verifica se vetor está vazio
    if(candidatos.length == 0){
        alert("Não há candidatos na lista")
        return
    }

    const corte = Number(prompt("Número de acertos para aprovação?"))

    if(corte == 0 || isNaN(corte)){
        alert("Número inválido")
        return
    }

    //cria uma cópia do vetor candidatos
    const copia = candidatos.slice()

    //ordena o vetor copia pelos acertos
    copia.sort((a, b) =>{a.acertos - b.acertos})

    //inverte a ordem dos elementos (para ficar decrescente)
    copia.reverse()

    let aprovados = "" //para concatenar aprovados

    //percorre os elementos do vetor
    for(const candidato of copia){
        if(candidato.acertos >= corte){
            aprovados += candidato.nome + " - " + candidato.acertos + " acertos\n"
        }
    }

    if(aprovados == ""){     
        resp.innerText = "Não há candidatos aprovados..."
    }else{
        resp.innerText = aprovados
    }
})