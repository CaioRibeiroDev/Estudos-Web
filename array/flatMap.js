const escola = [{
    nome: 'Turma A',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Caio',
        nota: 10
    }] 
}, {
    nome: 'Turma B',
    alunos:[{
        nome: 'Cauã',
        nota: 10
    },{
        nome: 'Isadora',
        nota: 7.4
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = t => t.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 8.9, 10 ], [ 10, 7.4 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)