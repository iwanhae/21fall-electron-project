module.exports = {
  presets: [
    ['@babel/preset-env', { targets: 'last 2 Chrome versions', loose: true }],
    ['@babel/preset-typescript'],
    ['@babel/preset-react'],
  ],
  plugins: ['babel-plugin-styled-components'],
};
