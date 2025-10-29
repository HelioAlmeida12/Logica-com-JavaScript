const prompt = require("prompt-sync")()
console.log("Informe os clientes em ordem de chegada ou 'Fim' no nome para sair")
const clientes = [] //declara o vetor
do{
    const nome = prompt("Nome: ") //Lê o nome
    if(nome == 'Fim'){ //antes de ler a idade, verifica
        break
    }
    const idade = Number(prompt("Idade: "))
    clientes.push({nome, idade})//adiciona ao vetor de objetos
    console.log("Ok! Cliente inserido na fila...")
}while(true)
    console.log("\nFila Preferencial") //\n no inicio gera uma nova linha 
    console.log("-".repeat(40))
    const filaPref = clientes.filter(cliente => cliente.idade >= 60)
    filaPref.forEach((fila, i) => {
        console.log(`${i + 1}.${fila.nome}`)
    })
    console.log("\nFila normal")
    console.log("-".repeat(40))
    const filaNormal = clientes.filter(cliente => cliente.idade < 60)
    filaNormal.forEach((fila, i) =>{
        console.log(`${i + 1}.${fila.nome}`)
    })
