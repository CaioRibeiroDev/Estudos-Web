const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)// erro
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'funcao'],
    [{}, 'objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((v1, ch) => {
    console.log(ch, v1)
})

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)