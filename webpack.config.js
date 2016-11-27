console.log('#jdf sfhey');
const path = require('path')
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/app.js',

  output: {
    path: __dirname + '/public/build',
    filename: 'shared.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/',
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, loader: 'style!css'},
    ]
  },

  resolve: {
    alias: {
      // 'react-router': path.join(__dirname, '..', 'modules'),
    }
  },

  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],

  context: __dirname,
  node: {
    __dirname: true,
  }

};
