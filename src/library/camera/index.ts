import CamUtils from '@mediapipe/camera_utils';

interface CanvasInitiatorParams {
  videoHTML: HTMLVideoElement;
  canvasHTML: HTMLCanvasElement;
}

interface CameraHookFunction {
  (v: HTMLVideoElement): Promise<void>;
}

class CameraFeed {
  videoElem: HTMLVideoElement;

  onFunctions: CameraHookFunction[];

  cam!: CamUtils.Camera;

  constructor(v: HTMLVideoElement) {
    this.videoElem = v;
    this.onFunctions = [];
  }

  async start(): Promise<void> {
    this.cam = new CamUtils.Camera(this.videoElem, {
      onFrame: async () => {
        const results = this.onFunctions.map((f) => {
          return f(this.videoElem);
        });
        await Promise.all(results);
      },
    });
    return this.cam.start();
  }

  addHook(f: CameraHookFunction): void {
    this.onFunctions.push(f);
  }

  async stop(): Promise<void> {
    return this.cam.stop();
  }
}

export default { CameraFeed };
