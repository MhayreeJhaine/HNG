import { Canvas } from "@react-three/fiber/native";
import { Environment, OrbitControls } from "@react-three/drei/native";
import Avatar from "./avatar";
import { AvatarState } from "./avatar";
import { useState } from "react";

interface AvatarViewerProps {
  selectedAvatar: "male" | "female";
  selectedAnimation: "idle" | "talk" | "wave" | "dance";
  selectedDirection: "left" | "right";
}

const initialMaleState: AvatarState = {
  position: [-0.5, 0, 0],
  rotation: [0, Math.PI / 2.8, 0],
  direction: "right",
  animation: "idle",
};

const initialFemaleState: AvatarState = {
  position: [0.5, 0, 0],
  rotation: [0, -Math.PI / 2.8, 0],
  direction: "left",
  animation: "idle",
};

function AvatarViewer({
  selectedAvatar,
  selectedAnimation,
  selectedDirection,
}: AvatarViewerProps) {
  const [maleAvatar, setMaleAvatar] = useState<AvatarState>(initialMaleState);
  const [femaleAvatar, setFemaleAvatar] =
    useState<AvatarState>(initialFemaleState);

  if (selectedAvatar === "male") {
    maleAvatar.animation = selectedAnimation;
    maleAvatar.direction = selectedDirection;
    femaleAvatar.animation = "idle";
  } else {
    femaleAvatar.animation = selectedAnimation;
    femaleAvatar.direction = selectedDirection;
    maleAvatar.animation = "idle";
  }

  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 50 }}
      style={{ top: 135 }}
      onCreated={(state) => {
        const _gl = state.gl.getContext();
        const pixelStorei = _gl.pixelStorei.bind(_gl);
        _gl.pixelStorei = function (...args) {
          const [parameter] = args;
          if (parameter === _gl.UNPACK_FLIP_Y_WEBGL) {
            return pixelStorei(...args);
          }
        };
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 5, 4]} intensity={2} />

      <Avatar state={maleAvatar} avatarType="male" />
      <Avatar state={femaleAvatar} avatarType="female" />

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}

export default AvatarViewer;
