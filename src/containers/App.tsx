import React from 'react';
import Typography from '@components/typography';
import './index.scss';
import styled from 'styled-components';

const App = (): JSX.Element => {
  return (
    <>
      <Typography />
      <StyledButton>Hello World</StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  display: inline-flex;
  padding: 12px;
  border: 1px solid;
  cursor: pointer;
`;

export default App;
