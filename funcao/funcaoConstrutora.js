function Carro(velocidadeMaxima = 200, delta = 5){

    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelovidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro()

uno.acelerar()
console.log(uno.getVelovidadeAtual())

const ferrari = new Carro(450, 20)
ferrari.acelerar
console.log(ferrari.getVelovidadeAtual)
ferrari.acelerar
ferrari.acelerar
ferrari.acelerar
console.log(ferrari.getVelovidadeAtual)
