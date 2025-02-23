import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import AvatarViewer from "@/components/avatarViewer";
import { useState } from "react";
import ControlsModal from "@/components/controlsModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import globalStyle from "@/globalStyle/globalStyle";

const Index = () => {
  const styles = globalStyle();

  const [selectedAvatar, setSelectedAvatar] = useState<"male" | "female">(
    "male"
  );
  const [animation, setAnimation] = useState<
    "idle" | "talk" | "wave" | "dance"
  >("idle");
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [modalVisible, setModalVisible] = useState(false);

  // ErrorUtils.setGlobalHandler((error) => {
  //   console.log("🔥 Uncaught Error:", error);
  //   console.log("📌 Stack Trace:", error.stack);
  // });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="game-controller" size={24} color="white" />
      </TouchableOpacity>
      <StatusBar style="auto" />
      <AvatarViewer
        selectedAvatar={selectedAvatar}
        selectedAnimation={animation}
        selectedDirection={direction}
      />

      <ControlsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectAvatar={setSelectedAvatar}
        onSelectAnimation={setAnimation}
        onSelectDirection={setDirection}
        selectedAvatar={selectedAvatar}
      />
    </SafeAreaView>
  );
};

export default Index;
