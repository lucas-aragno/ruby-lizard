var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('../webpack.dev.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: 'errors-only',
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.error(err)
  }
  console.log('Listening at localhost:3000')
})
