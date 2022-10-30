const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;

const config = {
  entry: {
    main: {
      import: './src/index.js',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new StatoscopePlugin({
      saveStatsTo: 'stats.json',
      saveOnlyStats: false,
      open: false,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
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
        resolve: { extensions: ['.js', '.jsx'] },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  resolve: {
    alias: {
      "crypto-browserify": path.resolve(__dirname, "src/crypto-fall.js"),
    },
    fallback: {
      buffer: require.resolve("buffer"),
      stream: false,
      crypto: require.resolve("crypto"),
    },
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "node_modules/ui/node_modules"),
    ],
  },

  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    innerGraph: true,
    concatenateModules: true,
    nodeEnv: 'production',

    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 250000,
    },
  },

  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
};

module.exports = config;
