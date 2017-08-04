
const webpack       = require('webpack');
const path          = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

  name : 'client-test',

  resolve : {
    modules : [
      path.resolve('.'), 'node_modules'
    ],
    extensions : ['.js', '.jsx', '.scss']
  },

  entry : {
    index     : 'client/index.js',
    dashboard : 'client/dashboard.js'
  },

  module : {
    loaders : [
    {
      test    : /\.js$/,
      exclude : /(node_modules|build)/,
      loader  : 'babel-loader',
      query   : {
        presets : [['es2015', { modules : false }], 'react', 'stage-0'],
        plugins : ['transform-decorators']
      }
    },
    {
      test   : /\.scss$/,
      loader : ExtractTextPlugin.extract({
        fallbackLoader : 'style-loader',
        loader         : 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
      })
    }, {
        test   : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'
      },
      {
        test   : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'file-loader?limit=1024&name=assets/fonts/[name].[ext]'
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
