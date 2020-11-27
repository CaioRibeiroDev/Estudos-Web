{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)
//console.log(b) ERRO

//template String
const produto = 'Ipad'
console.log(`${produto} é caro!`)

//destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} ={nome: 'Ana', idade: 17}
console.log(nome, i) 