const { series } = require('gulp')
const gulp = require ('gulp')
const uglify = require ('gulp-uglify')
const concat = require ('gulp-concat')
const babel = require ('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false,
        presets: ["env"]
    }))
    .pipe(uglify())
    .on('error', err => console.log('Erro: ', err))
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))

    return cb();
}

function fim(cb) {
    console.log('FIM!')
    return cb();
}

exports.default = series(transformacaoJS, fim)