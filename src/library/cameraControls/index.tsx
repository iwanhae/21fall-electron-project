import * as THREE from 'three';
import React, { useRef } from 'react';
import { useThree, useFrame, RootState } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// control camera
interface CameraControlsProps {
  target: THREE.Vector3;
}

const CameraControls = ({ target }: CameraControlsProps): JSX.Element => {
  // get reference of OribinControls
  // TODO: type 찾기
  const controls = useRef<any>();

  // get camera and renderer
  const {
    camera,
    gl: { domElement },
  } = useThree<RootState>();

  // this hook will excute on every rendered frame
  useFrame(() => controls.current.update());

  return (
    <OrbitControls ref={controls} args={[camera, domElement]} enablePan={false} enableZoom={true} target={target} />
  );
};

export default CameraControls;
