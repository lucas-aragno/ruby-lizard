var baseConfig = require('./webpack.config')
var merge = require('lodash').mergeWith

module.exports = merge(baseConfig, {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './frontend/javascript/index'
  ],
  debug: true,
  output: {
    publicPath: 'http://0.0.0.0:3000/assets/',
    filename: 'app.js'
  }
})
