
const webpack       = require('webpack');
const path          = require('path');
const argv          = require('yargs').argv;

const LiveReloadPlugin  = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendor = ['react', 'redux', 'react-redux', 'react-router', 'react-router-redux', 'immutable'];

const config = {

  name : 'client-dev',

  devtool : 'eval',

  resolve : {
    modules : [
      path.resolve('.'), 'node_modules'
    ],
    extensions : ['.js', '.jsx', '.scss']
  },

  entry : {
    index     : 'client/index.js',
    dashboard : 'client/dashboard.js',
    vendor    : vendor
  },

  output : {
    filename   : 'scripts/[name].js',
    publicPath : '../'
  },

  watch : Boolean(argv.watch),

  stats : { children : false },

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

  plugins : [
    new webpack.DefinePlugin({
      __DEVCLIENT__ : true,
      __DEVSERVER__ : false
    }),
    new ExtractTextPlugin('styles/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name      : 'vendor',
      filename  : 'scripts/vendor.js',
      minChunks : Infinity
    }),
   new webpack.LoaderOptionsPlugin({
      minimize   : true,
      debug      : false,
      sassLoader : {
        includePaths : [ path.resolve('.') ]
      }
    }),
    //new webpack.optimize.UglifyJsPlugin({ mangle : true, compress : { warnings : false }}),
    new LiveReloadPlugin()
  ]
};

module.exports = config;
