import * as THREE from 'three';
import React, { ReactNode, forwardRef } from 'react';
import { Canvas } from '@react-three/fiber';

// 카메라 설정 관련 상수
const SCREEN_WIDTH: number = window.innerWidth;
const SCREEN_HEIGHT: number = window.innerHeight;
const VIEW_ANGLE = 45;
const ASPECT: number = SCREEN_WIDTH / SCREEN_HEIGHT;
const NEAR = 1;
const FAR = 10000;

const CAMERA_POSITION: THREE.Vector3 = new THREE.Vector3(0, 2, 5);

interface CanvasProps {
  children: ReactNode;
}

const ThreeCanvas = forwardRef<HTMLCanvasElement, CanvasProps>(({ children }, ref): JSX.Element => {
  return (
    <Canvas
      ref={ref}
      gl={{ antialias: true }}
      dpr={window.devicePixelRatio}
      camera={{
        fov: VIEW_ANGLE,
        aspect: ASPECT,
        near: NEAR,
        far: FAR,
        position: CAMERA_POSITION,
      }}
      shadows
    >
      {children}
    </Canvas>
  );
});
ThreeCanvas.displayName = 'ThreeCanvas';

export default ThreeCanvas;
