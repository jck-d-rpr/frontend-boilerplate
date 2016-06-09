#Starter Kit for Building Applications in React and Redux in ES6.It is slightly modified version of [this](http://www.pluralsight.com/author/cory-house).

## Get Started
1. **Install [Node 6](https://nodejs.org)**.
2. **Clone this repository.** - `git clone <url>`
3. **Make sure you're in the directory you just created.**
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
This will run the automated build process, start up a webserver, and open the application in your
default browser. When doing development with this kit, this command will continue watching files all
your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically.
Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during
the build.
6. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.

## What? Why?
Now let's discuss what is present and why it is present. Read this if package.json is not making
sense to you

### Scripts
| **command** | **Use** |
|----------|-------|
| `analyse` | creates a `bundle-stats.json` which can be used to analyse your Dependency structure and using [Webpack Analyser](https://webpack.github.io/analyse/) |
| `clean` | To remove auto-generated files |
| `dev` | To start the development server at `localhost:3000` |
| `lint` | Lints your JavaScript (run with `:watch` to continuously do that) |
| `prestart` | Prints a message to the screen |
| `start` | Starts the watch version of `lint`, `dev` and `test` |
| `test` | Runs all the test cases one time (`:watch` to continuously do that) |
| `test:cover` | Runs test cases once and generates the coverage report |


### Babel configuration (The transpiler)
| **Preset** | **Use** |
|----------|-------|
| `es2015` | to be able to write ES6/ES2015/ES-next |
| `react` | To transpile JSX to plain JS |
| `stage-0` | Becase ES6 is old |

| **Plugins** | **Use** |
|----------|-------|
| `transform-runtime` | Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals. |


### AVA configuration (The testing framework)
| **parameter** | **value** | **effect** |
|-------|-------|----------|
| `verbose` | `true` | detailed output |
| `files` | `src/**/*.test.js` | only checks for the given pattern |
| `source` | [ `src/**/*.{js,jsx}`, .. ,`!src/**/*.test.js` ] | pattern for the source code |
| `concurrency` | `5` | Maximum number of files running at the same time |
| `failFast` | `true` | Stop after first failure |
| `tap` | `true` | generates TAP output |
| `require` | [ `./tools/test-helpers.js` ] | Includes some settings as specifed in the script |
| `babel` | `inherit` | Inherits the babel config (discussed above) |

## nyc configuration (The code coverage tool)
| **parameter** | **value** | **effect** |
|-------|-------|----------|
| `exclude` | [ `src/**/*.test.js` ] | Will not generate coverage for test cases |
| `extension` | [ `.jsx`, `.js` ] | The extensions to consider |
| `reporter` | [ `lcov`, `test`, `html` ] | generates report in all the mentioned formats |


###Production Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-polyfill | Polyfill for Babel features that cannot be transpiled |
|bootstrap|CSS Framework|
|immutable|Beautiful immutable data structures|
|jquery|Only used to support toastr|
|material-ui|Is there any other look and feel I want?|
|react|React library |
|react-addons-pure-render-mixin|Keeping the components pure|
|react-dom|React library for DOM rendering |
|react-icons|Icons...so many icons|
|react-redux|Redux library for connecting React components to Redux |
|react-router|React library for routing |
|react-router-redux|Keep React Router in sync with Redux application state|
|redux|Library for unidirectional data flows |
|redux-thunk|Async redux library|

###Development Dependencies
| **Dependency** | **Use** |
|----------|-------|
|ava|Futuristic JavaScript front-end testing|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-eslint|linting es6, react etc support|
|babel-loader|Adds Babel support to Webpack |
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-register|Register Babel to transpile our Mocha tests|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-plugin-import|Advanced linting of ES6 imports|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Add watch functionality to ESLint |
|eventsource-polyfill|Polyfill to support hot reloading in IE|
|express|Serves development and production builds|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build |
|file-loader| Adds file loading support to Webpack |
|jsdom|In-memory DOM for testing|
|npm-run-all| Display results of multiple commands on single command line |
|open|Open app in default browser|
|react-addons-test-utils| Adds React TestUtils |
|redux-immutable-state-invariant|Warn when Redux state is mutated|
|redux-mock-store|Mock Redux store for testing|
|rimraf|Delete files (cross environment support)|
|style-loader| Add Style support to Webpack |
|url-loader| Add url loading support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Adds middleware support to webpack |
|webpack-hot-middleware| Adds hot reloading to webpack |
