import React, { ReactNode } from 'react';
import sty from './typography.module.scss';

interface Props {
  children: ReactNode;
}

const Typography = ({ children }: Props): JSX.Element => {
  return <h1 className={sty.header}>{children}</h1>;
};

export default Typography;
