/* eslint-disable no-console */
import webpack from 'webpack';
import express from 'express';
import path from 'path';
import config from './webpack.config.dev.babel';
import open from 'open';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {

  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.
  hot: true,

  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,

  // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
  // Use '*' to proxy all paths to the specified server.
  // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
  // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
  proxy: { },

  // webpack-dev-middleware options
  // Display no info to console (only warnings and errors) default: false
  noInfo: false,
  // Display nothing to the console, default: false
  quiet: false,
  // lazy model, default: false
  lazy: false,

  watchOptions: {
    // Delay the rebuilt after the first change. Value is a time in ms.
    aggregateTimeout: 300,
    // polling interval
    poll: 1000
  },

  // The path where to bind the middleware to the server.
  publicPath: config.output.publicPath,
  // Output options for the stats
  stats: {
    // display the chunk information on the screen (super unhelpful)
    chunks: false,
    // colorful output to the console.
    colors: true,
    // reasons why any chunk was included
    reasons: false
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

// for every path return index.html required to make the browser history to
// work
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
