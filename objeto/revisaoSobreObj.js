//coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'Bugatti',
    valor: 50000000,
    proprietario: {
        nome: 'Caio',
        idade: 17,
        endereco: {
            logradouro: 'Avenida: João Nogueira',
            numero: 91
        }
    },
    condutores: [{
        nome: 'Caio',
        idade: 17
    }, {
        nome: 'SafeSFx',
        idade: 18
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'avenida: teste'
console.log(carro)


//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // se caso eu apagar o  carro.condutores isso retorna um erro...
