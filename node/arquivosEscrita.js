const  fs= require('fs')

const produto = {
    nome: 'Mouse',
    preco: 450,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})