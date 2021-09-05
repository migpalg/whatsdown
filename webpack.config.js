const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',
  mode: mode,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/',
  },
  devtool: mode === 'development' ? 'inline-source-map' : false,
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(__dirname, 'public/index.html'),
    }),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
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
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },
};
