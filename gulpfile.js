var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var filesize = require('gulp-filesize');

gulp.task('build', function() {
  return browserify({
    entries: './src/readability.js',
    extensions: ['.js'],
    debug: true
  })
      .transform('babelify', {presets: ['es2015']})
      .bundle()
      .pipe(source('readability.min.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(filesize())
      .pipe(gulp.dest('dist'));
});
