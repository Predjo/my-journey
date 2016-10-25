const gulp    = require('gulp');
const webpack = require('webpack-stream');
const path    = require('path');
const del     = require('del');

gulp.task('clean', function(){
  del(['build/*']);
});

gulp.task('js', ['clean'], function () {
  return gulp.src('client/*')
    .pipe(webpack({
      devtool : 'eval',

      resolve : {
        root : [
          path.resolve('.')
        ],
        extensions : ['', '.js', '.jsx', '.scss']
      },

      entry : {
        index     : 'client/index.js',
        dashboard : 'client/dashboard.js',
      },

      output : {
        filename : '[name].js'
      },

      module : {
        loaders : [{
          test    : /\.js$/,
          exclude : /(node_modules|build)/,
          loader  : 'babel',
          query   : {
            presets : ['es2015', 'react', 'stage-0']
          }
        }]
      }
    }))
    .pipe(gulp.dest('build/scripts/'));
});
