import React from 'react';
import styled from 'styled-components';

const Circle = styled.div<{ active: boolean }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#00ff00ff' : '#eeeeeeff') || 'black'};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Circle;
