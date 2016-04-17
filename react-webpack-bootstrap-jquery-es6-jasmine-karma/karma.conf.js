// Karma configuration
// Generated on Wed Mar 02 2016 23:29:21 GMT+0530 (IST)
/* eslint-disable no-var */
var webpack = require('karma-webpack');
var path = require('path');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'jasmine' ],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'spec/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // plugins to use
    plugins: [
      webpack,
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/**/*.spec.js': [ 'webpack', 'sourcemap' ],
      'src/**/*.js': [ 'webpack', 'coverage', 'sourcemap' ],
      'src/**/*.jsx': [ 'webpack', 'coverage', 'sourcemap' ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'spec', 'coverage', 'progress' ],

    // coverage reporter configuration
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'text' },
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },

    webpack: {
       // just do inline source maps instead of the default
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            exclude: [ /node_modules/, /\.spec\.js/ ],
            loader: 'isparta-instrumenter-loader'
          }
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          // css etc required to run bootstrap
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            include: path.join(__dirname, 'src')
          }
        ]
      }
    },
    // webpack configuration
    // jsx-es6 to plain old es5

    // webpack middleware settings
    webpackMiddleware: { noInfo: true },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'PhantomJS' ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
