const pai = {nome: 'Caio', corDoCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Carla'
console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Eduarda'
console.log(`${filha2.nome} tem o cabelo ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2){
    //console.log(key)
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por herança ${key}`)
}