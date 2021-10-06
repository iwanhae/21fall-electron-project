import React from 'react';
import styled from '@theme/styled';
import DateDisplay from '@components/dateDisplay';

const MainRoute = (): JSX.Element => {
  return (
    <StyledLayout>
      <DateDisplay />
      <StyledInnerContents>
        <>1</>
      </StyledInnerContents>
      <StyledBottomHeader>
        <div>Quit</div>
        <StyledButton>StartNow</StyledButton>
      </StyledBottomHeader>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

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
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.subHeader};
  padding: 8px 12px;
`;

export default MainRoute;
