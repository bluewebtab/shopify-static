const {watch, series} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var paths = {
    styles: {
        src: 'components/**/*.scss',
        dest: 'components'
    }
}

function compSass(){
    return gulp.src(['./components/**/*.scss', './styles/base.scss', './styles/vendors.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest))
}

function clean(cb){
    cb()
}

function javascript(cb){
    cb()
}

function css(cb){
    cb()
}


exports.compSass = compSass;
exports.default = function(){
    watch('src/*.css', css)
}