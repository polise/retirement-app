import path from 'path';
import webpack from 'webpack';
import FlowStatusWebpackPlugin from 'flow-status-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import baseConfig from '../base';
import defaultSettings from '../defaults';

const config = Object.assign({}, baseConfig, {
  entry: [
    `webpack-dev-server/client?http://0.0.0.0:${defaultSettings.port}`,
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"DEVELOPMENT"',
      DEVELOPMENT: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FlowStatusWebpackPlugin({
      failOnError: false,
    }),
    // new StyleLintPlugin({
    //   configFile: '.stylelintrc.js',
    //   files: ['./src/**/*.scss'],
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new ExtractTextPlugin('main.css'),
  ],
  module: defaultSettings.getDefaultModules(),
  resolve: defaultSettings.getResolve('dev', true),
  sassLoader: {
    includePaths: [path.join(__dirname, '../../node_modules')],
  },
  resolveLoader: {
    fallback: path.join(__dirname, '../../node_modules'),
  },
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loaders: ['react-hot', 'babel'],
  include: [].concat(
    config.additionalPaths,
    [path.join(__dirname, '/../../src')],
  ),
});

export default config;
