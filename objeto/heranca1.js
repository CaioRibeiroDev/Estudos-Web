const ferrari = {
    modelo: 'F40',
    velmax: 324
}

const bugatti = {
    modelo: 'b40',
    velmax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(bugatti.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto(params) {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
