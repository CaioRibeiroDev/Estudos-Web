console.log(soma(10, 5))
//console.log(sub(8, 5)) Erro pois só se pode colocar isso depois da criação da constante 'Linha 10'
//console.log(mult(8, 5)) Erro pois só se pode colocar isso depois da criação da constante 'Linha 16'

// function declaration
function soma(x, y){
    return x + y;
}

//functions expression
const sub = function (x, y){
    return x-y;
}

console.log(sub(8, 5))

// named function  expresssion
const mult = function mult(x, y){
    return x * y;
}

console.log(mult(8, 5))