//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'caneta', 
    preco: 200,
    tag: 'caneta escolar'
})

console.log('extensivel: ' +Object.isExtensible(produto))

produto.nome = 'Caneta Modificada'
produto.descricao = 'Caneta Preta Especial'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado: ' +Object.isSealed(pessoa))

pessoa.sobrenome = 'Rodrigues'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)