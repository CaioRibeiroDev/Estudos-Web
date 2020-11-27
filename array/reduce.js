const alunos = [
    {nome: 'Caio', nota: 10, bolsista: false},
    {nome: 'Joao', nota: 5.6, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsista: false},
    {nome: 'Pedro', nota: 7.3, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado.toFixed(0))