var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var filesize = require('gulp-filesize');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
require('babel-core/register');

var paths = {
  allSrc: './src/**/*.js',
  allTests: './test/**/*.js',
};

gulp.task('build', function() {
  return browserify({
    entries: './src/wordsmith.js',
    extensions: ['.js'],
    debug: true
  })
      .transform('babelify', {presets: ['es2015']})
      .bundle()
      .pipe(source('wordsmith.min.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(filesize())
      .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  gulp.src(paths.allSrc)
      .pipe(eslint())
      .pipe(eslint.format());
});

gulp.task('test', function() {
  gulp.src(paths.allTests)
      .pipe(mocha());
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['lint', 'test']);
});
