const path = require('node:path');
const webpack = require('webpack');
const fs = require('node:fs');
const stylus = require('stylus');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const stylesheetDir = path.resolve(__dirname, 'stylesheets');
const outStylesheetDir = path.resolve(__dirname, 'dist/static');

class MarkdownStylesheetPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('MarkdownStylesheetPlugin', (compilation, callback) => {
      const source = fs.readFileSync(path.join(stylesheetDir, 'markdown.styl'), 'utf8');
      fs.mkdirSync(outStylesheetDir, {recursive: true});
      stylus(source)
        .set('paths', [stylesheetDir])
        .set('filename', 'markdown.styl')
        .render((error, css) => {
          if (error) {
            callback(error);
            return;
          }

          fs.writeFileSync(path.join(outStylesheetDir, 'markdown.css'), css);
          callback();
        });
    });
  }
}

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'static/application.js'
    },
    devtool: 'source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/application.css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {from: '*.html'},
          {from: 'stylesheets/reset.css', to: 'static/reset.css'}
        ]
      }),
      new webpack.ProvidePlugin({
        process: require.resolve('process/browser')
      }),
      new MarkdownStylesheetPlugin()
    ],
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'),
        stream: require.resolve('stream-browserify'),
        util: require.resolve('util/')
      }
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.styl$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {modules: false}],
                ['@babel/preset-react', {runtime: 'classic'}]
              ]
            }
          }
        }
      ]
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist')
      },
      host: '0.0.0.0',
      port: 12321,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api', '/files'],
          target: 'http://snucse.snucse.org:30110',
          secure: false
        }
      ]
    }
  };
};
