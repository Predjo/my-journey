
const webpack       = require('webpack');
const path          = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

  name : 'client-test',

  resolve : {
    root : [
      path.resolve('.')
    ],
    extensions : ['', '.js', '.jsx', '.scss']
  },

  module : {
    loaders : [
    {
      test    : /\.js$/,
      exclude : /(node_modules|build)/,
      loader  : 'babel',
      query   : {
        presets : ['es2015', 'react', 'stage-0'],
        plugins : ['transform-decorators']
      }
    },
    {
      test   : /\.scss$/,
      loader : ExtractTextPlugin.extract('style', [
        'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass'
        //'postcss-loader'
      ])
    }]
  },

  node : {
    fs            : 'empty',
    child_process : 'empty'
  },

  stats : { children : false },

  plugins : [
    new webpack.DefinePlugin({
      __DEVCLIENT__ : true,
      __DEVSERVER__ : false
    }),
    new ExtractTextPlugin('styles/[name].css')
  ]
};

module.exports = config;
