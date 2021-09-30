/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef } from 'react';

interface Props {
  /** size of canvas width in pixel value */
  width: number;
  /** size of canvas height in pixel value */
  height: number;
}

/**
 * This will be a one and only canvas this project will use
 * @param param0 Props
 * @returns JSX
 */
const PrimaryCanvas = ({ width, height }: Props): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const video = videoRef.current as HTMLVideoElement;
  const canvas = canvasRef.current as HTMLCanvasElement;

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};

export default PrimaryCanvas;
