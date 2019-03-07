const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
  SRC: './src',
  DIST: './dist'
}

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const externals = {
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
  },
  'prop-types': {
    root: 'PropTypes',
    commonjs2: 'prop-types',
    commonjs: 'prop-types',
    amd: 'prop-types',
    umd: 'prop-types'
  }
};

let plugins = [];

if (NODE_ENV === 'production') {
  var definePlugin = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  });

  // var minifyPlugin = new webpack.optimize.UglifyJsPlugin({
  //   include: /\.min\.js$/,
  //   compress: {
  //     warnings: true
  //   }
  // });

  plugins.push(definePlugin);
  // plugins.push(minifyPlugin);
}

module.exports = {
  context: __dirname,

  entry: {
    'react-flex-modal': PATHS.SRC + '/Modal.js',
    'react-flex-modal.min': PATHS.SRC + '/Modal.js'
  },

  externals: externals,

  optimization: {
    // minimize: NODE_ENV === 'production',
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        // compress: {
        //   warnings: true
        // }
      })
    ]
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/' + PATHS.DIST,
    libraryTarget: 'umd',
    library: 'ReactFlexModal'
  },

  mode: NODE_ENV,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }],
      }
    ]
  },

  plugins: plugins
}