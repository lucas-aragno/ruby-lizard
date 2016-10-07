var path = require('path')
var webpack = require('webpack')
var postcssImport = require('postcss-import')
var postcssCssnext = require('postcss-cssnext')

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
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
      loader: 'url-loader'
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  cssnext: {
    browsers: 'last 2 versions'
  },
  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssCssnext
    ]
  }
}
