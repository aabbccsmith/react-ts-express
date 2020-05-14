const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 2000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:3000',
    },
    stats: {
      colors: true,
      chunks: false,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      children: false,
      source: false,
      warnings: true,
      noInfo: true,
      contentBase: './dist',
      hot: true,
      modules: false,
      errors: true,
      reasons: true,
      errorDetails: true,
    },
  },
  resolve: {
    modules: ['src/client', 'node_modules'],
  },
};