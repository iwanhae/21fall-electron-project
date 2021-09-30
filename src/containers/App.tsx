import React from 'react';
import Canvas from '@components/canvas';
import { hot } from 'react-hot-loader/root';
import GlobalStyle from '@components/GlobalStyle';
import Typography from '@components/typography';

const App = (): JSX.Element => {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <>
      <GlobalStyle />
      <Typography>Hello World2</Typography>
      {/* @iWan: We need a page router for below canvas! This is the temporary placement */}
      <Canvas width={width} height={height} />
    </>
  );
};

export default hot(App);
