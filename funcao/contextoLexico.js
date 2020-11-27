const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

//TESTE
const valor1 = 'Global'

function minhaFuncao1(valor1){
    console.log(valor1)
}

function exec1(){
    const valor1 = 'Local'
    minhaFuncao1(valor1)
}

exec1()