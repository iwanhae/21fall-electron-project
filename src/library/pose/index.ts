import Pose from '@mediapipe/pose';

interface PoseHookFunction {
  (p: Pose.Results): Promise<void>;
}

class PosePipe {
  pose: Pose.Pose;

  onFunctions: PoseHookFunction[];

  constructor() {
    this.onFunctions = [];
    this.pose = new Pose.Pose({
      locateFile: (file: string) => {
        console.log(`https://cdn.jsdelivr.net/npm/@mediapipe/pose@${Pose.VERSION}/${file}`);
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${Pose.VERSION}/${file}`;
      },
    });
    this.pose.setOptions({
      selfieMode: false,
      modelComplexity: 0,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    this.pose.onResults(async (e) => {
      const results = this.onFunctions.map((f) => {
        return f(e);
      });
      await Promise.all(results);
    });
  }

  addHook(f: PoseHookFunction): void {
    this.onFunctions.push(f);
  }

  async catchImage(img: Pose.InputImage): Promise<void> {
    await this.pose.send({
      image: img,
    });
  }
}

export default { PosePipe };
