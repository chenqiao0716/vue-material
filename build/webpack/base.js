import path from 'path';
import webpack from 'webpack';
// TODO
import eslintFormatter from 'eslint-friendly-formatter';
import config from '../config';

const resolvePath = (dir) => {
  return path.resolve(__dirname, '..', '..', dir);
};

export default {
  entry: {
    docs: './docs/src/index.js'
  },
  output: {
    path: config.rootPath,
    // TODO
    publicPath: config.publicPath,
    filename: '[name].js'
  },

  // TODO
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      assets: resolvePath('docs/src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        // TODO
        include: [
          resolvePath('build'),
          resolvePath('src'),
          resolvePath('docs')
        ],
        options: {
          fix: true,
          formatter: eslintFormatter
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolvePath('build'),
          resolvePath('src'),
          resolvePath('docs')
        ]
      },
      {
        test: /\.theme$/,
        // TODO
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '/assets/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env
    })
  ]
};
