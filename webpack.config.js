const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    application: './app.js',
    markdown: './stylesheets/markdown.styl'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'static/[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: '*.html', context: __dirname, to: '[name][ext]'},
        {from: 'stylesheets/reset.css', to: 'static/reset.css'}
      ]
    })
  ],
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
              '@babel/preset-env',
              ['@babel/preset-react', {runtime: 'classic'}]
            ]
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
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
