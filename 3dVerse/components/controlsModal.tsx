import {
  Modal,
  View,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import globalStyle from "@/globalStyle/globalStyle";

interface ControlsModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectAvatar: (avatar: "male" | "female") => void;
  onSelectAnimation: (animation: "idle" | "talk" | "walk" | "dance") => void;
  onSelectDirection: (direction: "left" | "right") => void;
  selectedAvatar: "male" | "female";
}

const ControlsModal = ({
  visible,
  onClose,
  onSelectAvatar,
  onSelectAnimation,
  onSelectDirection,
  selectedAvatar,
}: ControlsModalProps) => {
  const styles = globalStyle();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="closecircle" size={24} color="red" />
          </TouchableOpacity>
          <View>
            {/* <Text style={styles.title}>Select Avatar</Text> */}
            <View style={styles.gBtn}>
              <TouchableOpacity
                style={[styles.gB, { backgroundColor: "#342EDA" }]}
                onPress={() => onSelectAvatar("male")}
              >
                <Text style={styles.gTxt}>MALE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.gB, { backgroundColor: "#CE2EDA" }]}
                onPress={() => onSelectAvatar("female")}
              >
                <Text style={styles.gTxt}>FEMALE</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sub}>
            <View style={{}}>
              <Text style={styles.title}>Animations</Text>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row", gap: 25 }}>
                  <TouchableOpacity
                    onPress={() => onSelectAnimation("idle")}
                    style={styles.btn}
                  >
                    <Text style={styles.btnT}>IDLE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onSelectAnimation("talk")}
                    // style={styles.leftButton}
                    style={styles.btn}
                  >
                    <Text style={styles.btnT}>TALK</Text>
                  </TouchableOpacity>
                </View>
                {/* <View style={{ flexDirection: "row", gap: 25, left: -8 }}>
                  <TouchableOpacity
                    onPress={() => onSelectAnimation("walk")}
                    // style={styles.rightButton}
                    style={styles.btn}
                  >
                    <Text style={styles.btnT}>JUMP</Text>
                  </TouchableOpacity> */}
                <Pressable
                  onPress={() => onSelectAnimation("dance")}
                  style={styles.btn}
                >
                  <Text style={styles.btnT}>DANCE</Text>
                </Pressable>
                {/* </View> */}
              </View>
            </View>

            <View>
              <Text style={styles.title}>Directions</Text>
              <View style={{ flexDirection: "row", gap: 10, top: 20 }}>
                <TouchableOpacity
                  onPress={() => onSelectDirection("left")}
                  style={styles.btn}
                >
                  <Text style={styles.btnT}>LEFT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onSelectDirection("right")}
                  style={styles.btn}
                >
                  <Text style={styles.btnT}>RIGHT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ControlsModal;
