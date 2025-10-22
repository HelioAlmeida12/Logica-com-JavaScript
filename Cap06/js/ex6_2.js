const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] //Vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 //num aleatorio entre 1 e 100
const CHANCES = 6 //constante com o número máximo de chances

frm.addEventListener("submit", (e) =>{ //escuta evento submit do form
    e.preventDefault()
    const numero = Number(frm.inNumero.value) //Ob´tem número digitado
    if(numero == sorteado){ //se acertou
        respDica.innerText = `Parabéns!! Numero sorteado: ${sorteado} `
        frm.btSubmit.disable = true //troca status dos botões
        frm.btNovo.className = "exibe"
    } else{
        if(erros.includes(numero)){ //se número existe no vetor erros (Já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else{
            erros.push(numero) //adiciona número ao vetor
            const numErros = erros.length //obtém tamanho do vetor
            const numChances = CHANCES - numErros //Calcula n° de chances
            //exibe n° de erros, contéudo do vetor e n° de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = numChances
            if(numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disable = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game over!! Número sorteado: ${sorteado}`
            } else{
                //usa operador ternario para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = "" //limpa campo de entrada
    frm.inNumero.focus() //posiciona cursor neste campo
})

frm.btNovo.addEventListener("click", () =>{
    location.reload() //recarrega a página
})

