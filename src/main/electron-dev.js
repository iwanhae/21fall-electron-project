const webpack = require('webpack');
const path = require('path');
const { execFile } = require('child_process');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const compiler = webpack({
  entry: './src/main/index.ts',
  mode: 'development',
  target: 'electron-main',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.electron.json'),
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
        include: [path.resolve(__dirname, './')],
        exclude: /node_modules/,
      },
    ],
  },
  stats: 'minimal',
});

let process = null;

compiler.watch({}, (err, stats) => {
  if (err != null) {
    console.error(err);
  }
  if (stats !== null) {
    console.log(stats.toString({ colors: true }));
  }

  if (process !== null) {
    process.kill('SIGINT');
  }

  process = execFile(path.resolve(__dirname, '../../node_modules/.bin/electron'), [
    path.resolve(__dirname, '../../dist/index.js'),
  ]);
});
