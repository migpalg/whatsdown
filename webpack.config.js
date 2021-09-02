const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {},
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },
};
