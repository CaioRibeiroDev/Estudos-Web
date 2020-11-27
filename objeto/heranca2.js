// cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = '0'//n faça 
const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B', atributo3: 'C'}
const filho = {__proto__: pai, atributo3: 'D'}
console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta 
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'v40',
    velMax: 324
}

const bugatti = {
    modelo: 'chiron',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(bugatti, carro)

console.log(ferrari)
console.log(bugatti)

bugatti.acelerarMais(100)
console.log(bugatti.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())

