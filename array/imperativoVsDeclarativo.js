const aluno = [
    {nome: 'joao', nota: 7.9},
    {nome: 'Maria', nota: 9.8}
]

//imperativa
let total = 0

    for(let i = 0; i < aluno.length; i++){
        total += aluno[i].nota
    }

    console.log((total / aluno.length).toFixed(2))

//declarativa
const getNota = a => a.nota
const soma = (total, atual) => total += atual

const total2 = aluno.map(getNota).reduce(soma)
console.log((total2 / aluno.length).toFixed(2))