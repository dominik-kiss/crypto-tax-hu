// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isProduction = process.env.NODE_ENV == "production";

const config = {  
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    fallback: {
        "fs": false,
        "stream": false,
        "crypto": false,
        "path": false,
        "util": false,
        "buffer": false,
        "assert": false,
        "constants": false,
        "http": false,
        "https": false,
        "os": false,
        "url": false,
        "zlib": false,
        "net": false,
        "tls": false,
        "child_process": false,
        "string_decoder": false,
        "process": false,
        "events": false,
        "vm": false,
        "tty": false,
        "readline": false,
        "domain": false,
        "punycode": false,
        "dgram": false,
        "dns": false,
        "timers": false,
        "querystring": false,
    },
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      title: 'Shape Tracker',
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ],
  node: {
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  performance: { hints: false }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
