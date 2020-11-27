function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('NoteBook', 2199.49))
console.log(criarProduto('Celular', 2500.99))