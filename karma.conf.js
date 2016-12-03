const devTestConfig = require('./webpack/webpack.config.test-client');

module.exports = function (config) {
  config.set({
    browsers   : [ 'Chrome' ], //run in Chrome
    singleRun  : true, //just run once by default
    frameworks : [ 'mocha' ], //use the mocha test framework
    files      : [
      'tests.webpack.js' //just load this file
    ],

    preprocessors : {
      'tests.webpack.js' : [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },

    browserNoActivityTimeout : 30000,

    webpack : devTestConfig,

    webpackMiddleware : {
        // webpack-dev-middleware configuration
        noInfo : true,
        stats  : {
         chunks : false
        }
    },

    webpackServer : {
      noInfo : true,
      stats  : {
        chunks : false
      }
    },

    plugins : [
      'karma-chrome-launcher',
      //'karma-jsdom-launcher',
      'karma-mocha',
      'karma-chai',
      //'karma-sinon',
      'karma-mocha-reporter',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],

    reporters : ['mocha']
  });
};
