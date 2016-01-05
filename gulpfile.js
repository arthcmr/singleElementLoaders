/*

 Gulpfile
 Compiles Sass and minifies it to CSS

 Tasks:

 gulp         : compiles sass into css
 gulp watch   : compiles and watches for changes

 */

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');

//compiles sass into css + minified css
gulp.task('styles', function() {
  return sass('./src/loaders.sass', {
      style: 'expanded'
    })
    .on('error', function(err) {
      console.error(err);
      this.emit('end');
    })
    .pipe(autoprefixer())
    .pipe(gulp.dest('./'))
    .pipe(minify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'));
});

//main tasks
gulp.task('default', ['styles']);
gulp.task('watch', function() {
  gulp.watch('./src/*.sass', ['styles']);
});