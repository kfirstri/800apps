var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('build', function() {
  gulp.src('./jsx_src/app.js')
    .pipe(browserify({ transform: ['reactify'] }))
    .pipe(gulp.dest('./scripts/'));
});

gulp.task('build_ugly', function() {
  gulp.src('./jsx_src/app.js')
  .pipe(browserify({ transform: ['reactify'] }))
  .pipe(gulp.dest('./scripts/'));
});

gulp.task('watch', function(args) {
  console.log('building...');

  var buildType = args === 'prod' ? 'build_ugly' : 'build';

  gulp.watch('jsx_src/app.js', [buildType]);
});
