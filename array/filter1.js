const produtos = [
    {nome: 'NoteBook', preco: 9500, fragil: true},
    {nome: 'Celular', preco: 2600, fragil: true},
    {nome: 'Mouse', preco: 350, fragil: true},
    {nome: 'Teclado', preco: 367, fragil: true},
    {nome: 'Papel', preco: 100, fragil: false}
]

console.log(produtos.filter(function(e){
  return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter(caro).filter(fragil))
