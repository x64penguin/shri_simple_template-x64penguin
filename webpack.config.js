const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const webpack = require('webpack');

const config = {
  entry: {
    index: './src/index.js',
    about: './src/pages/About.js',
    home: './src/pages/Home.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new StatoscopePlugin({
      saveStatsTo: 'stats.json',
      saveReportTo: 'report.html',
      saveOnlyStats: false,
      open: false,
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
  },
  mode: 'development',
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    innerGraph: true,
    concatenateModules: true,
    usedExports: true,

    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: 300000,
      minChunks: 1,
    },
  },
  // @TODO lodash treeshaking
  // @TODO chunk for lodash
  // @TODO chunk for runtime
  // @TODO fallback for crypto
};

module.exports = config;
