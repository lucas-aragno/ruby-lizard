var path = require('path');
var webpack = require('webpack');

module.exports = {
devtool: 'source-map',
entry: [
  'webpack-hot-middleware/client',
  './frontend/javascript/index'
],
output: {
  filename: 'bundle.js',
  path: path.join(__dirname, 'public', 'js'),
  publicPath: '/static/'
},
plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true
  })
],
module: {
  loaders: [{
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    include: path.join(__dirname, 'frontend', 'javascript')
   },
   {
     test: /\.css$/,
     loaders: ['style', 'raw'],
     include: __dirname
   }]
 }
};
