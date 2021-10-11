/* eslint-disable jsx-a11y/media-has-caption */
import React, { useCallback, useEffect, useRef } from 'react';
import Camera from '@library/camera';
import Pose from '@library/pose';

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
const DebugCanvas = ({ width, height }: Props): JSX.Element => {
  let video: HTMLVideoElement;
  let canvas: HTMLCanvasElement;

  const refHook = useCallback((e) => {
    if (e instanceof HTMLVideoElement) {
      video = e;
    } else if (e instanceof HTMLCanvasElement) {
      canvas = e;
    }
    if (canvas != null && video != null) {
      // init
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.font = '15px Arial';
      const cam = new Camera.CameraFeed(video);
      const pose = new Pose.PosePipe();

      // cam -> pose
      cam.addHook(async (img) => {
        ctx.drawImage(img, 0, 0, 300, 300);
        await pose.catchImage(img);
      });

      // pose -> draw canvas
      pose.addHook(async (p) => {
        p.poseLandmarks?.forEach((ptr, i) => {
          ctx.fillText(`${i}`, ptr.x * 300, ptr.y * 300);
        });
      });

      // receiving cam
      cam.start();
    }
  }, []);

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <video ref={refHook} style={{ display: 'none' }} />
      <canvas ref={refHook} width={width} height={height} />
    </div>
  );
};

export default DebugCanvas;
