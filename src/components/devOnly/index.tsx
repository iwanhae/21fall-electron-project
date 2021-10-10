import React from 'react';
import styled from '@theme/styled';
import { Button, Group } from 'reakit';
import { useHistory } from 'react-router-dom';
import { Backward, Camera, Github, Settings } from '@icons/index';
import { css } from 'styled-components';

const DevOnly = (): JSX.Element => {
  const history = useHistory();

  return (
    <StyledWrap>
      <ReakitGroup>
        <LinkedButton onClick={() => history.go(-1)}>
          <Backward />
        </LinkedButton>
        <LinkedButton onClick={() => history.push('/camera')}>
          <Camera />
        </LinkedButton>
        <LinkedButton onClick={() => history.push('/settings')}>
          <Settings />
        </LinkedButton>
        {/* todo: using shell.openExternal */}
        <ButtonAnchor href="https://github.com/syd03098/21fall-electron-project" target="_blank" rel="noreferrer">
          <Github />
        </ButtonAnchor>
      </ReakitGroup>
    </StyledWrap>
  );
};

const defaultButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const ButtonAnchor = styled.a`
  ${defaultButton};
  text-decoration: none;
  color: inherit;
`;

const LinkedButton = styled(Button)`
  ${defaultButton}
`;

const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 12px;
  margin-top: 12px;
`;

const ReakitGroup = styled(Group)`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export default DevOnly;
