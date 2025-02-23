import { maleAnimations, femaleAnimations } from "../constants/animations";
import type { Animation, Orientation } from "../components/avatar";

export const getAnimationFile = (isMale: boolean, animation: Animation) => {
  return isMale ? femaleAnimations[animation] : femaleAnimations[animation];
};

export const getAnimationClipName = (animation: Animation): string => {
  switch (animation) {
    case "talk":
      return "talking";
    case "dance":
      return "dance";
    case "wave":
      return "waving";
    case "idle":
    default:
      return "idle";
  }
};

export const getRotationForDirection = (
  direction: Orientation
): [number, number, number] => {
  switch (direction) {
    case "left":
      return [0, -Math.PI / 2, 0];
    case "right":
      return [0, Math.PI / 2, 0];
    case "up":
      return [0, Math.PI, 0];
    case "down":
    default:
      return [0, 0, 0];
  }
};
