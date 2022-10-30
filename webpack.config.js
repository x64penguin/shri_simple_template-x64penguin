const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const webpack = require('webpack');

const config = {
  entry: {
    main: {
        import: './src/index.js',
    }
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
    hot: true,
    port: 9000,
    open: true,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
        resolve: { extensions: [".js", ".jsx"] }
      },
      {
        test: /\.css$/i,
        use: 'css-loader',
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
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    innerGraph: true,
    concatenateModules: true,

    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 250000,
    },
  },
  // @TODO lodash treeshaking
  // @TODO chunk for lodash
  // @TODO chunk for runtime
  // @TODO fallback for crypto
};

module.exports = config;
