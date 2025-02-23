import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import AvatarViewer from "@/components/avatarViewer";
import { useState } from "react";
import globalStyle from "@/globalStyle/globalStyle";

const Index = () => {
  const styles = globalStyle();

  const [selectedAvatar, setSelectedAvatar] = useState<"male" | "female">(
    "male"
  );
  const [animation, setAnimation] = useState<
    "idle" | "talk" | "jump" | "dance"
  >("idle");
  const [direction, setDirection] = useState<"left" | "right">("right");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AvatarViewer
        selectedAvatar={selectedAvatar}
        selectedAnimation={animation}
        selectedDirection={direction}
      />
    </SafeAreaView>
  );
};

export default Index;
