import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

function getDefaultModules() {
  return {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader'),
      },
      {
        test: /\.(jpg|gif|svg|png)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  };
}

function getResolve(environment, includeFallback = false) {
  const object = {
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: `${srcPath}/config/base.js`,
      ApiService: `${srcPath}/redux/store/ApiService`,
    },
  };

  if (includeFallback) {
    object.fallback = path.join(__dirname, '../../node_modules');
  }

  return object;
}

export default {
  quiet: true,
  srcPath,
  publicPath: '/',
  port: dfltPort,
  getDefaultModules,
  getResolve,
};
