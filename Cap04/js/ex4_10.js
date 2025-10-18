const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
  e.preventDefault()

  let ladoA = Number(frm.inLadoA.value)
  let ladoB = Number(frm.inLadoB.value)
  let ladoC = Number(frm.inLadoC.value)


  if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB){
    resp1.innerText = `Não pode formar um triangulo`
    
  }else if(ladoA == ladoB && ladoA == ladoC){
    resp2.innerText = `Tipo: Equilatero`

  }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
    resp2.innerText = `Tipo: Isósceles`

  }else{
    resp2.innerText = `Tipo: Escaleno`
  }
})