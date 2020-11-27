function pessoa(nome){
    
    this.nome = nome
    

    this.falar = function(){
        console.log(`Meu Nome é: ${this.nome}`)
    }

}

const p1 = new pessoa('Caio')
p1.falar()
console.log(p1.nome)