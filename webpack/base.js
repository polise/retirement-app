import path from 'path';

import defaultSettings from './defaults';

const additionalPaths = [];

export default {
  additionalPaths,
  port: defaultSettings.port,
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist/'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath,
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: true, // Show only warnings and errors
  },
  module: {},
};
