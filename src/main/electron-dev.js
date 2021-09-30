const webpack = require('webpack');
const path = require('path');
const { execFile } = require('child_process');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const isWindows = process.platform === 'win32';
const fileName = isWindows ? 'electron.cmd' : 'electron';

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

let childProcess = null;

compiler.watch({}, (err, stats) => {
  if (err != null) {
    console.error(err);
  }
  if (stats !== null) {
    console.log(stats.toString({ colors: true }));
  }

  if (childProcess !== null) {
    childProcess.kill('SIGINT');
  }

  childProcess = execFile(path.resolve(__dirname, `../../node_modules/.bin/${fileName}`), [
    path.resolve(__dirname, '../../dist/index.js'),
  ]);
});
