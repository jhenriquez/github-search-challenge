const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    app: path.resolve(srcDir, 'app', 'root.jsx'),
    vendor: [
      'babel-polyfill',
      'whatwg-fetch',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'lodash'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'scripts/[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [srcDir],
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        include: [srcDir],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      srcDir
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.resolve(srcDir, 'app/actions'),
      components: path.resolve(srcDir, 'app/components'),
      containers: path.resolve(srcDir, 'app/containers'),
      middlewares: path.resolve(srcDir, 'app/middlewares'),
      models: path.resolve(srcDir, 'app/models'),
      reducers: path.resolve(srcDir, 'app/reducers'),
      sagas: path.resolve(srcDir, 'app/sagas'),
      services: path.resolve(srcDir, 'app/services'),
      store: path.resolve(srcDir, 'app/store'),
      mocks: path.resolve(__dirname, 'mocks')
    }
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com'
      }
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor" }),
    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      filename: 'index.html'
    })
  ]
};