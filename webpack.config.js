var webpack = require('webpack');

var SRC = './src',
  EXAMPLES = './examples';

module.exports = {
  context: __dirname,

  entry: {
    'bundle': EXAMPLES + '/app'
  },

  output: {
    path: __dirname + '/' + EXAMPLES,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react', 'es2015', 'es2016', 'stage-2'] },
        }],
      }
    ]
  },

  devServer: {
    contentBase: __dirname + '/' + EXAMPLES,
    port: 9000,
    inline: true
  }
}