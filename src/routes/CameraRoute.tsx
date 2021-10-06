import React, { Suspense } from 'react';
import ThreeCanvas from '@library/threeCanvas';
import Scene from '@library/scene';
import Model from '@library/model';
import { Vector3 } from 'three';
import styled from 'styled-components';

const TARGET: Vector3 = new Vector3(0, 0.5, 0);
const MODEL_POSITION = new Vector3(0, 0, 0);

const CameraRoute = (): JSX.Element => {
  return (
    <>
      <Container>
        <ThreeCanvas>
          <Scene target={TARGET}>
            <Suspense fallback={null}>
              <Model index={-1} position={MODEL_POSITION} />
            </Suspense>
          </Scene>
        </ThreeCanvas>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 400px;
`;

export default CameraRoute;
