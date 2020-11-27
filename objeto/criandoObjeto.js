//usando a notação literal
const obj = {}
console.log(obj)

//object em JS
const obj2 = new Object()
console.log(obj2)

//Funções construtoras
function produto(nome, preco, desc) {
    this.nome = nome //nome ficou como publico...
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('PC', 4500, 0.15)
const p2 = new produto('Strike', 97500, 0.30)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /30) * (30 - faltas)
        },
        getValorDeFaltas(){
            return (salarioBase /30) * (faltas)
        }
    }
}

const f1 = criarFuncionario('Caio', 7980, 4)
const f2 = criarFuncionario('izabela', 650, 7)
console.log(f1.getSalario(), f2.getSalario())
console.log(f1.valorFaltas(), f2.valorFaltas())

//Object.create
const filha = Object.create(null)
filha.nome = 'Anna'
console.log(filha)

//um função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)
console.log(fromJSON.info)