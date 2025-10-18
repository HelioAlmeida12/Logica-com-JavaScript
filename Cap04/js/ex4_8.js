const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const velocidadePermitida = Number (frm.inVelocidadePermitida.value)
    const velocidadeCondutor = Number(frm.inCondutor.value)
    const multaLeve = velocidadePermitida + (velocidadePermitida * 0.20)
    
  if(velocidadeCondutor > multaLeve){
    resp.innerText = `Multa grave`
  }else if(velocidadeCondutor <= velocidadePermitida){
    resp.innerText = `Sem multa`
  }else{
    resp.innerText = `Multa leve`
  }
})