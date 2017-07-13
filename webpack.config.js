const
  path = require('path'),
  htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "cheap-eval-source-map",
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({title: 'Code splitting - dynamic imports'})
  ]
};