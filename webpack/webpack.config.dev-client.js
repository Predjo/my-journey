
const webpack       = require('webpack');
const path          = require('path');
const argv          = require('yargs').argv;

const LiveReloadPlugin  = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendor = ['react', 'redux', 'react-redux', 'react-router', 'react-router-redux'];

const config = {

  name : 'client-dev',

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
    vendor    : vendor
  },

  output : {
    filename : 'scripts/[name].js'
  },

  watch : Boolean(argv.watch),

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
      loader : ExtractTextPlugin.extract('style-loader', [
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader',
        //'postcss-loader'
      ].join('!'))
    }]
  },

  plugins : [
    new webpack.DefinePlugin({
      __DEVCLIENT__ : true,
      __DEVSERVER__ : false
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'scripts/vendor.js'),
    //new webpack.optimize.UglifyJsPlugin({ mangle : true, compress : { warnings : false }}),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('styles/[name].css'),
    new LiveReloadPlugin()
  ]
};

module.exports = config;
