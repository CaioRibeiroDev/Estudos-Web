const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
       console.log(this.saudacao) 
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)//neste metodo o bind(pessoa) faz referencia a o obj que esta dentro dele
falarDePessoa()
