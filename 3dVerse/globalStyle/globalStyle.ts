import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const globalStyle = () => {
  return ScaledSheet.create({
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    container: {
      flex: 1,
      backgroundColor: "#D7A5D3",
      // backgroundImage: require("../assets/brickBg.jpg"),
    },

    openButton: {
      position: "absolute",
      top: "60@s",
      alignSelf: "flex-end",
      right: "16@s",
      backgroundColor: "blue",
      padding: "10@s",
      borderRadius: "45%",
    },

    gBtn: {
      flexDirection: "row",
      gap: "90@s",
      //   right: "-15@s",
      paddingBottom: "6@s",
    },

    gB: {
      padding: "10@s",
      marginTop: "8@s",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6@s",
    },

    gTxt: {
      fontSize: "16@s",
      fontWeight: "900",
      color: "#fff",
    },

    overlay: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.25)",
    },

    controlsContainer: {
      backgroundColor: "#D0CFD1",
      padding: 8,
      borderTopLeftRadius: "22@s",
      borderTopRightRadius: "22@s",
      alignItems: "center",
    },

    title: {
      fontSize: "16@s",
      fontWeight: "bold",
      marginTop: "8@s",
      textAlign: "center",
    },

    buttonGroup: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginVertical: "25@s",
    },

    closeButton: {
      alignSelf: "flex-end",
      paddingTop: "10@s",
      right: "10@s",
    },

    closeButtonText: {
      color: "red",
      fontSize: "16@s",
      fontWeight: "bold",
    },

    sub: {
      flexDirection: "row",
      width: width * 1,
      justifyContent: "space-between",
      paddingHorizontal: "35@s",
    },

    canCon: {
      paddingTop: "135@s",
    },

    btn: {
      backgroundColor: "#765FC3",
      padding: "10@s",
      marginTop: "8@s",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6@s",
    },

    btnT: {
      color: "#fff",
      fontWeight: "700",
    },
  });
};

export default globalStyle;
