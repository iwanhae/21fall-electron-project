const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.tsx', 'ts', '.js'],
    symlinks: false,
    alias: {
      '@containers': path.resolve(__dirname, './src/containers'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  entry: {
    app: './src/containers/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].js',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: /\.module\.scss$/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/containers/index.html',
      scriptLoading: 'blocking',
      minify: false,
    }),
  ],
};
