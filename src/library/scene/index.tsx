import * as THREE from 'three';
import React, { ReactFragment } from 'react';
import CameraControls from '@library/cameraControls';

interface SceneProps {
  children?: ReactFragment;
  target: THREE.Vector3;
}
const Scene = ({ children, target }: SceneProps): JSX.Element => (
  <>
    <CameraControls target={target} />
    <hemisphereLight color={0xffffff} groundColor={new THREE.Color(0x444444)} position={[0, 20, 0]} />
    <directionalLight
      color={0xffffff}
      position={[3, 10, 10]}
      castShadow
      shadow-camera-top={2}
      shadow-camera-bottom={-2}
      shadow-camera-left={-2}
      shadow-camera-right={2}
      shadow-camera-near={0.1}
      shadow-camera-far={40}
    />
    {children}
  </>
);

Scene.defaultProps = {
  children: null,
};

export default Scene;
