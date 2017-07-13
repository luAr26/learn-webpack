const
  path = require('path'),
  htmlWebpackPlugin = require('html-webpack-plugin'),
  cleanWebpackPlugin = require('clean-webpack-plugin'),
  webpack = require('webpack');

module.exports = {
  devtool: "cheap-eval-source-map",
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
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
    new webpack.HotModuleReplacementPlugin(),
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({title: 'Development'})
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist')
  }
};