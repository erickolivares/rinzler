var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload');

var input = './scss/style.scss',
    output = './css/';

gulp.task('sass', function () {
  return gulp.src(input)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
    .pipe(livereload({ start: true }));
});

gulp.task('production', function () {
  return gulp.src(input)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(output))
});

gulp.task('watch', function() {
  livereload.listen();
  return gulp
    .watch("./scss/**/*.scss", gulp.parallel(["sass"]))
    .on('change', function(event) {
  });
});

gulp.task("run", gulp.series(['watch', 'sass'], function () { }))