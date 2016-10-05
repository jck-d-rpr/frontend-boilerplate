import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devServer: {
    inline: true,
    hot: true,
    progress: true,
    contentBase: path.join(process.cwd(), 'src')
  },
  // The source map file will only be downloaded if you have source maps enabled and your dev tools open.
  // A SourceMap without column-mappings. SourceMaps from loaders are simplified to a single mapping per line.
  devtool: 'eval-source-map',
  entry: {
    polyfill: [ 'babel-polyfill' ],
    common: [ 'webpack-hot-middleware/client?reload=true', 'react', 'react-dom', 'material-ui' ],
    // Entry point to the bundle
    // process.cwd(): the current working directory from which the node command
    // was executed => path of package.json
    app: path.join(process.cwd(), 'src/index')
  },
  module: {
    loaders: [
      // babel loader to transpile es6/7 with jsx -> es5
      { test: /\.jsx?$/, include: path.join(process.cwd(), 'src'), loaders: [ 'babel' ] },
      // ability to load css files into js files
      { test: /(\.css)$/, loaders: [ 'style', 'css' ] },

      /* BOOTSTRAP CONFIGURATION */
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  noInfo: false,
  output: {
    // Note: Physical files are only output by the production build task `npm run build`.
    path: process.cwd() + '/static/',
    filename: '[name].js',
    // NOTE: better way to name files
    chunkFilename: '[name].[hash].js',
    publicPath: '/static/'
  },
  plugins: [
    // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    // Hot Module Replacement (HMR) exchanges, adds or removes modules while an application is running without
    // page reload.
    new webpack.HotModuleReplacementPlugin(),
    // Hot loader is better when used with NoErrorsPlugin and hot/only-dev-server since it eliminates page reloads
    // altogether and recovers after syntax errors.
    new webpack.NoErrorsPlugin()
    // new webpack.optimize.CommonsChunkPlugin({ name: 'common', minChunks: 3 })
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },

  // where this app is going to run
  target: 'web'
};
