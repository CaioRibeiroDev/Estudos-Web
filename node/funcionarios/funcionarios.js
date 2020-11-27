const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (fun, funAtual) => {
    return fun.salario < funAtual.salario ? fun : funAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    //mulher chinesa com menor salario
    const fun = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(fun)
})


