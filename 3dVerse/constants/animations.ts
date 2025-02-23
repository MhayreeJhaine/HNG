export const maleAnimations = {
  idle: require("../assets/animations/M_Standing_Idle_Variations_003.glb"),
  talk: require("../assets/animations/M_Talking_Variations_004.glb"),
  wave: require("../assets/animations/M_Standing_Expressions_001.glb"),
  dance: require("../assets/animations/M_Dances_009.glb"),
  jump: require("../assets/animations/M_Walk_Jump_003.glb"),
  walk: require("../assets/animations/maleWalk.glb"),
};

export const femaleAnimations = {
  idle: require("../assets/animations/F_Standing_Idle_Variations_008.glb"),
  talk: require("../assets/animations/F_Talking_Variations_001.glb"),
  wave: require("../assets/animations/M_Standing_Expressions_001.glb"),
  dance: require("../assets/animations/F_Dances_006.glb"),
  jump: require("../assets/animations/F_Walk_Jump_001.glb"),
  walk: require("../assets/animations/walk.glb"),
};

export const AVATARS = {
  male: require("../assets/avatars/maleModel.glb"),

  female: require("../assets/avatars/femaleModel.glb"),
};

// Preloading the animation models
import { useGLTF } from "@react-three/drei/native";

[
  AVATARS.male,
  AVATARS.female,
  ...Object.values(maleAnimations),
  ...Object.values(femaleAnimations),
].forEach((path) => useGLTF.preload(path));
