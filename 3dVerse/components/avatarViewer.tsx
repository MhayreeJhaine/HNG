import { Canvas } from "@react-three/fiber/native";
import { Environment, OrbitControls } from "@react-three/drei/native";
import Avatar from "./avatar";
import { AvatarState } from "./avatar";
import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ControlsModal from "./controlsModal";
import globalStyle from "@/globalStyle/globalStyle";

interface AvatarViewerProps {
  selectedAvatar: "male" | "female";
  selectedAnimation: "idle" | "talk" | "walk" | "dance" | "jump";
  selectedDirection: "left" | "right";
}

const initialMaleState: AvatarState = {
  position: [-0.5, -0.8, 0],
  rotation: [0, Math.PI / 2.8, 0],
  direction: "right",
  animation: "idle",
};

const initialFemaleState: AvatarState = {
  position: [0.5, -0.8, 0],
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
  const [modalVisible, setModalVisible] = useState(false);
  const [avatar, setAvatar] = useState<"male" | "female">(selectedAvatar);
  const [animation, setAnimation] = useState<
    "idle" | "talk" | "walk" | "dance" | "jump"
  >(selectedAnimation);
  const [direction, setDirection] = useState<"left" | "right">(
    selectedDirection
  );

  if (avatar === "male") {
    maleAvatar.animation = animation;
    maleAvatar.direction = direction;
    femaleAvatar.animation = "idle";
  } else {
    femaleAvatar.animation = animation;
    femaleAvatar.direction = direction;
    maleAvatar.animation = "idle";
  }

  const styles = globalStyle();

  return (
    <View style={{ flex: 1 }}>
      {/* Full-screen 3D Scene */}
      <Canvas
        camera={{ position: [0, 1, 5], fov: 50 }}
        style={{ flex: 1 }}
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
        <Environment preset="city" background />
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 5, 4]} intensity={1.5} />

        <Avatar state={maleAvatar} avatarType="male" />
        <Avatar state={femaleAvatar} avatarType="female" />

        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>

      {/* Controls Button - Overlayed */}
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="game-controller" size={24} color="white" />
      </TouchableOpacity>

      {/* Controls Modal */}
      <ControlsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectAvatar={setAvatar}
        onSelectAnimation={setAnimation}
        onSelectDirection={setDirection}
        selectedAvatar={avatar}
      />
    </View>
  );
}

export default AvatarViewer;
