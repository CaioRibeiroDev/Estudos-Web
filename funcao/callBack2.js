const notas = [6.2, 4.5, 9.0, 7.8, 8.9, 9.1, 4.8]

//Sem CallBack
const notasBaixas1 = []
for (const i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com CallBack
const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(notasBaixas2)

//CallBack & Arrow

const notaMenorQue = notas => notas < 7 
const notasBaixas3 = notas.filter(notaMenorQue)

console.log(notasBaixas3)