//nao aceita repetição
//nao é indexado

const times = new Set()
times.add('Vasco')
times.add('Corinthians').add('flamento').add('palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Corinthians'))
times.delete('flamengo')

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)