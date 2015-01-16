var browserify = require('gulp-browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('build', function(){
  // Single entry point to browserify
  gulp.src('jsx_src/app.js')
  .pipe(browserify({
    transform: ['reactify'],
    insertGlobals : true
  }))
  .pipe(gulp.dest('./scripts/app.js'));
});

gulp.task('watch', function() {
  console.log('building...');
  gulp.watch('jsx_src/*', ['build']);
});
