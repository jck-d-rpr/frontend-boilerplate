/* eslint-disable no-var */
// Karma configuration
// Generated on Sun Jan 31 2016 06:13:26 GMT+0530 (IST)

var webpack = require('karma-webpack');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'spec/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/**/*.spec.js': ['webpack'],
      'src/**/*.js': ['webpack', 'coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage', 'progress'],

    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },

    webpack: {
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }],
        postLoaders: [{
          test: /\.jsx?$/,
          exclude: /(node_modules|spec)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
