Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
        
    }
    return newArray
}

const produtos = [
    {nome: 'NoteBook', preco: 9500, fragil: true},
    {nome: 'Celular', preco: 2600, fragil: true},
    {nome: 'Mouse', preco: 350, fragil: true},
    {nome: 'Teclado', preco: 367, fragil: true},
    {nome: 'Papel', preco: 100, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true

console.log(produtos.filter2(caro).filter2(fragil))