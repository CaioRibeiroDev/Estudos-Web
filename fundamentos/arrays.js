const valores = [7.7, 8.6, 6.3, 9.2];
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

//valores[10] = 100
//console.log(valores)
console.log('quantos elementos tem no array ' + valores.length)


valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
