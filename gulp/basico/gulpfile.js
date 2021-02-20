const gulp = require('gulp')
const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Executando Antes1')
    return cb();
}

const antes2 = cb => {
    console.log('Executando Antes2')
    return cb();
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    // .pipe(imagemPelaMetade())//transformações pega todos os arquivos da src e deixa pela metade
    .pipe(gulp.dest('pastaB'))
    return cb();
}

const fim = cb => {
    console.log('Executando Fim')
    return cb();
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim)