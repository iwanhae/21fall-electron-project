import React, { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, onClick }, ref): JSX.Element => {
  return (
    <StyledButton ref={ref} onClick={onClick}>
      {children}
    </StyledButton>
  );
});
Button.displayName = 'Button';

const StyledButton = styled.button`
  padding: 15px;

  font-size: 20px;
  font-weight: 700;
  color: black;

  border: none;
  border-radius: ${({ theme }) => theme.properties.border.radius};

  background-color: ${({ theme }) => theme.color.primary};

  box-shadow: rgba(17, 17, 26, 0.1) 0 8px 24px, rgba(17, 17, 26, 0.1) 0 16px 56px, rgba(17, 17, 26, 0.1) 0 24px 80px;
`;

export default Button;
