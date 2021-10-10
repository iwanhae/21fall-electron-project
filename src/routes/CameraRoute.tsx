import React, { useState, Suspense } from 'react';
import ThreeCanvas from '@library/threeCanvas';
import Scene from '@library/scene';
import Model from '@library/model';
import Circle from '@src/components/circle';
import { Vector3 } from 'three';
import styled from 'styled-components';

const TARGET: Vector3 = new Vector3(0, 1.8, 0);
const MODEL_POSITION = new Vector3(0, 0, 0);

const EXERCISE = '스쿼트';
const quota = 3;
const DESCRIPTION = '발을 어깨너비로 벌린 후, 앉았다 일어나세요';

const CameraRoute = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((count + 1) % (quota + 1));
  };

  return (
    <>
      <StyledLayout>
        <Typography size={20} padding={20}>
          {EXERCISE}
        </Typography>
        <Typography position="center" size={40} padding={20}>
          {DESCRIPTION}
        </Typography>
        <CanvasContainer>
          <ThreeCanvas>
            <Scene target={TARGET}>
              <Suspense fallback={null}>
                <Model index={-1} position={MODEL_POSITION} />
              </Suspense>
            </Scene>
          </ThreeCanvas>
        </CanvasContainer>
        <CircleContainer onMouseDown={increment}>
          {[...Array(count)].map((_, i) => (
            <Circle key={i.toString()} active={true} />
          ))}
          {[...Array(quota - count)].map((_, i) => (
            <Circle key={i.toString()} active={false} />
          ))}
        </CircleContainer>
        <TempContainer left={100}>디버깅용 스켈레톤</TempContainer>
        <TempContainer right={100}>모범자세</TempContainer>
      </StyledLayout>
    </>
  );
};

const TempContainer = styled.div<{ left?: number; right?: number }>`
  position: fixed;
  bottom: 100px;
  left: ${({ left }) => `${left}px` || '0px'};
  right: ${({ right }) => `${right}px` || '0px'};
  width: 300px;
  height: 300px;
  border: 1px solid grey;
`;

const Typography = styled.div<{ size: number; position?: string; padding?: number }>`
  display: flex;
  justify-content: ${({ position }) => position || 'flex-start'};
  width: 100%;
  font-size: ${({ size }) => `${size}px`};
  padding: ${({ padding }) => `${padding}px` || '0px'};
`;

const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 55%;
  margin: 50px 0px;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default CameraRoute;
