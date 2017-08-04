
const gulp          = require('gulp');
const clean         = require('gulp-clean');
const webpackStream = require('webpack-stream');
var webpack2        = require('webpack');

const devClientConfig = require('./webpack/webpack.config.dev-client');
//const devServerConfig = require('./webpack/webpack.config.dev-server');

gulp.task('clean', function(){
    return gulp.src('build/*')
        .pipe(clean({ force : true }));
});

gulp.task('assets', ['clean'], function(){
  return gulp.src('assets/**/*')
        .pipe(gulp.dest('build/assets', { override : true }));
});

gulp.task('build-client', ['clean', 'assets'], function () {

  return gulp.src('client/*')
    .pipe(webpackStream(devClientConfig, webpack2))
    .pipe(gulp.dest('build/'));
});

/*gulp.task('build-server', [], function () {

  return gulp.src('./*')
    .pipe(webpackStream(devServerConfig))
    .pipe(gulp.dest('build/'));
});*/
