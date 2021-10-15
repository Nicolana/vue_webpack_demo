const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");
const constant = require("./config");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        /* 将js文件转码为es5 */
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compileOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: {
                require: [
                  require("autoprefixer")
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              // markdown options is here!
            },
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      CONSTANT: JSON.stringify(constant)
    })
  ],
  devServer: { 
    host: 'localhost',
    port: 9527
  },
}
