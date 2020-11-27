const alunos = [
    {nome: 'Caio', nota: 10, bolsista: false},
    {nome: 'Joao', nota: 5.6, bolsista: true},
    {nome: 'Ana', nota: 9.8, bolsista: false},
    {nome: 'Pedro', nota: 7.3, bolsista: true}
]

//desafio 1:  Todos os alunos sao bolsista?

const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista))

//desafio 2: algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
