//par nome/valor
const saudacao = 'opa' // contexto léxico

function exec(){
    const saudacao = 'falaaaaa' // contexto lexico
    return saudacao
}
//objetos sao grupos aninhados de pares nome/valor

const cliente = {
nome: 'Pedro',
idade: 18,
peso: 100,
endereco: {
    logradouro: 'Rua com Estalta',
    numero: 15472
    }
}

console.log(saudacao)
console.log(exec())
