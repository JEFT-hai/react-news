var htmlWebpackPlugin = require('html-webpack-plugin');
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
 //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loaders: [
          'url-loader?limit: 1000&name=assets/[name]-[hash:5].[ext]',
          'image-webpack-loader'
          ]
      }
    ]
  },
  output: {
    filename: './dist/js/[name].bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: './dist/index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
};
