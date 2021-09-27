import React, { ReactNode } from 'react';
import styled from 'styled-components';
import sty from './typography.module.scss';

interface Props {
  children: ReactNode;
}

const Typography = ({ children }: Props): JSX.Element => {
  return <h1 className={sty.header}>{children}</h1>;
  // return <StyledTypography>{children}</StyledTypography>
};

const StyledTypography = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: red;
`;

export default Typography;
