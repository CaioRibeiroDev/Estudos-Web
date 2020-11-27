const pilotos = ['Caio', 'Massa', 'Afonso', 'Vitoria']
console.log(pilotos)
pilotos.pop() //Vitoria Quebrou  Carro
console.log(pilotos)

pilotos.push('Maicon')
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Joseph')
console.log(pilotos) // adiciona no primeiro

//splice pode adicionar e remover elementos

//add
pilotos.splice(1, 0, 'Vitoria', 'Izabela')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //Massa quebrou novamente
console.log(pilotos)

const algunsElementos1 = pilotos.slice(2)//Novo Array
console.log(algunsElementos1)

const algunsElementos2 = pilotos.slice(1, 4)
console.log(algunsElementos2)