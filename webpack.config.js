/* global module */
module.exports = {
  entry: './dist/out-tsc/main.js',
  resolve: {
    mainFields: ['es2015', 'browser', 'module', 'main']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.bundle.js'
  }
};
