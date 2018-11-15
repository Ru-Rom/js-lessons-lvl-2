var gulp = require('gulp');
var concat = require('gulp-concat'); // собирает все файлы в один
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var htmlreplace = require('gulp-html-replace');
var browserify = require('gulp-browserify');

var prod = 1;
var buildPath = prod ? 'builds/prod/' : 'builds/dev/'; // пути для дев\прод сборок
var fileName = prod ? 'main.min' : 'main'; // изменение имен файлов в зависимости от вида сборки
var src = { // конфиг содержащий пути для поиска обрабатываемых данных
  html: 'app/*.html',
  js: ['app/js/libs/*.js', 'app/js/*.js'],
  less: 'app/less/*.less',
  css: 'app/css/*.css'
};

gulp.task('default', ['js', 'css', 'html', 'clean'], function () {
    console.log('Все задания по умолчанию');
});

gulp.task('js', function(){
  return gulp.src(src.js) // src.js ссылка на свойство js, указывает где следует смотреть js файлы
  // pipe выполняет последовательность операций над полученными выше данными
    .pipe(concat(fileName + '.js')) // собрать все в один файл с указанным названием
    .pipe(browserify())
    //.pipe(gulpif(prod, uglify())) // uglify выдает ошибку при выполнении без данных что ему не нравится, подозреваю что файлы собираются в не правильном порядке
    .pipe(gulp.dest(buildPath))
});

gulp.task('css', function(){
  return gulp.src(src.css)
    .pipe(concat(fileName + '.css'))
    //.pipe(less()) // собирает из less css
    .pipe(gulp.dest(buildPath))
});

gulp.task('html', function(){
  return gulp.src(src.html)
    .pipe(htmlreplace({
      'css': fileName + '.css',
      'js': fileName + '.js'
    }))
    .pipe(gulp.dest(buildPath))
});

gulp.task('clean', function(){
  return gulp.src(buildPath, {read: false})
    .pipe(clean());
});

gulp.task('build', ['js', 'css', 'html']);
