
const gulp          = require('gulp');
const webpackStream = require('webpack-stream');
const del           = require('del');

const devClientConfig = require('./webpack/webpack.config.dev-client');
//const devServerConfig = require('./webpack/webpack.config.dev-server');

gulp.task('clean', function(){
  del(['build/*']);
});

gulp.task('build-client', ['clean'], function () {

  return gulp.src('client/*')
    .pipe(webpackStream(devClientConfig))
    .pipe(gulp.dest('build/'));
});

/*gulp.task('build-server', [], function () {

  return gulp.src('./*')
    .pipe(webpackStream(devServerConfig))
    .pipe(gulp.dest('build/'));
});*/
