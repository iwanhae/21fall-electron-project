import * as THREE from 'three';
import React, { Suspense } from 'react';
import styled from 'styled-components';
import Typography from '@components/typography';
import ThreeCanvas from '@library/threeCanvas';
import Scene from '@library/scene';
import Model from '@library/model';

const TARGET: THREE.Vector3 = new THREE.Vector3(0, 0.5, 0);
const MODEL_POSITION = new THREE.Vector3(0, 0, 0);

const MainRoute = (): JSX.Element => {
  return (
    <>
      <Typography>Hello World</Typography>
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

export default MainRoute;
