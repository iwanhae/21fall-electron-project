import React from 'react';
import DateDisplay from '@components/dateDisplay';
import styled from '@theme/styled';

const MainRoute = (): JSX.Element => {
  return (
    <>
      <DateDisplay />
      <StyledInnerContents />
      <StyledBottomHeader>
        <StyledButton>StartNow</StyledButton>
      </StyledBottomHeader>
    </>
  );
};

const StyledInnerContents = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const StyledButton = styled.button`
  display: inline-flex;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: ${({ theme }) => theme.properties.border.radius};
  background-color: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.text.primary};
`;

const StyledBottomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: ${({ theme }) => theme.color.subHeader};
  padding: 8px 12px;
`;

export default MainRoute;
