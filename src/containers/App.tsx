import React from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyle from '@components/GlobalStyle';
import Typography from '@components/typography';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Typography>Hello World</Typography>
    </>
  );
};

export default hot(App);
