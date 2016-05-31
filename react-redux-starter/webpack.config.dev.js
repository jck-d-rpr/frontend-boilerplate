import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  // The source map file will only be downloaded if you have source maps enabled and your dev tools open.
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  entry: {
    polyfill: [ 'babel-polyfill' ],
    common: [ 'webpack-hot-middleware/client?reload=true', 'react', 'react-dom', 'material-ui' ],
    // Entry point to the bundle
    app: './src/index'
  },
  target: 'web',
  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: __dirname + '/static/',
    filename: '[name].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/static/'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    // Hot Module Replacement (HMR) exchanges, adds or removes modules while an application is running without
    // page reload.
    new webpack.HotModuleReplacementPlugin(),
    // Hot loader is better when used with NoErrorsPlugin and hot/only-dev-server since it eliminates page reloads
    // altogether and recovers after syntax errors.
    new webpack.NoErrorsPlugin()
    // new webpack.optimize.CommonsChunkPlugin({ name: 'common', minChunks: 3 })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: [ 'babel' ] },
      { test: /(\.css)$/, loaders: [ 'style', 'css' ] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
};
