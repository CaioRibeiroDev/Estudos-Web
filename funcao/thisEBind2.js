function pessoa(){
    this.idade = 0


    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

console.log('Novo Teste')
new pessoa