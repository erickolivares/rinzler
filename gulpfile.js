var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

var input = './scss/style.scss',
	output = './css/';

var htmlInput = 'index.html',
    htmlOutput = './build/',
    htmlmin = require('gulp-htmlmin');

var minify = require('gulp-minify'),
    jsOutput = './js';


gulp.task('sass', function () {
  return gulp.src(input)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
    .pipe(livereload({ start: true }));
});

gulp.task('watch', function() {
  livereload.listen();
  return gulp
    .watch('./scss/**/*.scss', ['sass'])
    .on('change', function(event) {
    });
});

gulp.task('compress', function() {
  gulp.src('./js/*.js')
    .pipe(minify({
        ext:{
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest(jsOutput));
});

gulp.task('minifycss', function () {
  return gulp.src(input)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build/css/'))
});

gulp.task('minify', function() {
  return gulp.src(htmlInput)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlOutput));
});


gulp.task('run', ['watch', 'sass','compress']);
gulp.task('production', ['minifycss', 'minify']);