const path = require('path');
const NgCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new NgCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: './src/index.ts'
    }),
    new UglifyJsPlugin(),
    new CompressionPlugin()
  ],
  mode: 'production',
  stats: {
    assets: true,
    warnings: false
  }
};
