import React, { useMemo } from 'react';
import styled from '@theme/styled';

const DateDisplay = (): JSX.Element => {
  const dateFormatted = useMemo(
    () =>
      new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    [],
  );

  return (
    <StyledWrap>
      <Title>🔔&nbsp; BellMan</Title>
      <Title>{dateFormatted}</Title>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.topHeader};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export default DateDisplay;
