import * as THREE from 'three';

// ========================== [ manage model ] ========================================
const PREFIX = 'mixamorig';
interface BONES {
  [boneName: string]: number[];
}

/*
	-1번: 기본(십자가)
	1번: 대자
	2번: 손바닥 챱
*/
const POSE: BONES[] = [
  {
    LeftUpLeg: [0, 0, 20],
    RightUpLeg: [0, 0, -20],
  },
  {
    LeftShoulder: [0, 0, 70],
    RightShoulder: [0, 0, -70],
    LeftArm: [180, 0, 0],
    RightArm: [180, 0, 0],
    LeftForeArm: [0, 0, -40],
    RightForeArm: [0, 0, 40],
    LeftUpLeg: [0, 0, 20],
    RightUpLeg: [0, 0, -20],
  },
];

const getRotationFromDegree = (degree: number[]): THREE.Vector3 =>
  new THREE.Vector3().fromArray(degree.map((d) => THREE.MathUtils.degToRad(d)));

export const setPose = (idx: number, bones: THREE.Bone[]): void => {
  // set pose to default
  if (idx === -1) {
    bones.forEach((joint) => {
      joint.rotation.setFromVector3(getRotationFromDegree([0, 0, 0]));
    });

    return;
  }

  const pose = POSE[idx];
  // name of bones declared in pose
  const names = Object.keys(pose);

  bones.forEach((joint) => {
    // name of joint (except prefix)
    const name = joint.name.split(PREFIX)[1];
    // if joint is declared in pose, get degree by name
    const degree = names.indexOf(name) === -1 ? [0, 0, 0] : pose[name];
    // and set rotation of joint by degree
    joint.rotation.setFromVector3(getRotationFromDegree(degree));
  });
};
