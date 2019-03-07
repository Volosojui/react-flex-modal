const PATHS = {
  SRC: './src',
  EXAMPLES: './examples'
}

module.exports = {
  context: __dirname,

  entry: {
    'bundle': PATHS.EXAMPLES + '/app'
  },

  output: {
    path: __dirname + '/' + PATHS.EXAMPLES,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            },
          }
        ],
      }
    ]
  },

  devtool: 'none',

  devServer: {
    contentBase: __dirname + '/' + PATHS.EXAMPLES,
    port: 9000,
    inline: true
  }
}