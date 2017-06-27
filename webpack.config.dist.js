var NODE_ENV = process.env.NODE_ENV == 'production' ? 'production' : 'development';

var webpack = require('webpack');

var SRC = './src',
  DIST = './dist';

var plugins = [],
  externals = {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    }
  };

if (NODE_ENV == 'production') {
  var definePlugin = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  });

  var minifyPlugin = new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    compress: {
      warnings: true
    }
  });

  plugins.push(definePlugin);
  plugins.push(minifyPlugin);
}

module.exports = {
  context: __dirname,

  entry: {
    'react-modal': SRC + '/Modal.js',
    'react-modal.min': SRC + '/Modal.js'
  },

  externals: externals,

  output: {
    filename: '[name].js',
    path: __dirname + '/' + DIST,
    libraryTarget: 'umd',
    library: 'ReactJSModal'
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

  plugins: plugins
}