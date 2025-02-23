import { useAnimations, useGLTF } from "@react-three/drei/native";
import { useFrame } from "@react-three/fiber/native";
import { useEffect, useRef } from "react";
import { Group } from "three";
import {
  getAnimationClipName,
  getRotationForDirection,
} from "../constants/avatarUtils";
import {
  maleAnimations,
  femaleAnimations,
  AVATARS,
} from "../constants/animations";

export type Animation = "idle" | "talk" | "walk" | "dance" | "jump";
export type Orientation = "left" | "right" | "up" | "down";

export interface AvatarState {
  position: [number, number, number];
  rotation: [number, number, number];
  direction: Orientation;
  animation: Animation;
}

export interface AvatarProps {
  state: AvatarState;
  avatarType: "male" | "female";
}

function Avatar({ state, avatarType }: AvatarProps) {
  const avatarRef = useRef<Group>(null);

  const { scene } = useGLTF(AVATARS[avatarType]) as any;

  const animationFile =
    avatarType === "male"
      ? maleAnimations[state.animation]
      : femaleAnimations[state.animation];
  const { animations } = useGLTF(animationFile) as any;
  const { actions, names } = useAnimations(animations, avatarRef);

  const desiredRotation = useRef(state.rotation);
  const currentAngle = useRef(state.rotation);
  const rotating = useRef(false);

  useEffect(() => {
    if (!actions) return;

    try {
      const animationKey = getAnimationClipName(state.animation);
      const foundAnimation = names.find((name: string) =>
        name.toLowerCase().includes(animationKey.toLowerCase())
      );

      if (foundAnimation && actions[foundAnimation]) {
        Object.values(actions).forEach((action) => action?.fadeOut(0.3));
        actions[foundAnimation]?.reset()?.fadeIn(0.3)?.play();
      }
    } catch (error) {
      console.error(`Error loading animation for ${avatarType}:`, error);
    }
  }, [state.animation, actions, names, avatarType]);

  useEffect(() => {
    desiredRotation.current = getRotationForDirection(state.direction);
    rotating.current = true;
  }, [state.direction]);

  useFrame((_, delta) => {
    if (!avatarRef.current) return;

    avatarRef.current.position.set(...state.position);

    if (rotating.current) {
      const rotationSpeed = 5 * delta;
      const [targetX, targetY, targetZ] = desiredRotation.current;
      const [curX, curY, curZ] = currentAngle.current;

      let rotationDiff = targetY - curY;
      if (rotationDiff > Math.PI) rotationDiff -= 2 * Math.PI;
      if (rotationDiff < -Math.PI) rotationDiff += 2 * Math.PI;

      const adjustedY = curY + rotationDiff * rotationSpeed;
      currentAngle.current = [curX, adjustedY, curZ];

      if (Math.abs(rotationDiff) < 0.01) {
        rotating.current = false;
        currentAngle.current = desiredRotation.current;
      }

      avatarRef.current.rotation.set(...currentAngle.current);
    }
  });

  return (
    <group ref={avatarRef} dispose={null} position={state.position}>
      <primitive object={scene} scale={0.9} />
    </group>
  );
}

export default Avatar;
