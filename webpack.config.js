const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const { VueLoaderPlugin } = require('vue-loader');

const vuejsRule = {
  test: /\.vue$/,
  loader: 'vue-loader'
};

// const vuejsRuleDep = {
//   test: require.resolve('vue'),
//   use: {
//     loader: 'expose-loader',
//     options: 'vue'
//   }
// };

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // sourceMapFilename: "[name].js.map"
  },
  devtool: "source-map",
  devServer: {
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: false,
        },
      },
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
    ],
  }, resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.runtime.esm-browser.prod.js'
      'vue$': 'vue/dist/vue.esm-bundler.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Shape Tracker',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "node_modules", "luxembourg-geoportail", "bundle", "assets"), to: "assets" }
      ],
      })
  ]
};