var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {

    home: [
    'webpack-hot-middleware/client',
    './client/homeApp'
  ],
    blog: [
    'webpack-hot-middleware/client',
    './client/blogApp'
  ],
    blogForm: [
    'webpack-hot-middleware/client',
    './client/blogFormApp'
  ]

},

  output: {
    path: path.join(__dirname, 'static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    }]
  }
};
