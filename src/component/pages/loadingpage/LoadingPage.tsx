import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";

import BacgroundImg from "../../../../assets/svg/loading_background.svg";
import LOGO from "../../../../assets/svg/logo_1.svg";
import TextLogo from "../../../baseui/TextLogo/TextLogo";

const LoadingPage = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../../../../assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Bold": require("../../../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Thin": require("../../../../assets/fonts/Roboto/Roboto-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      navigation.navigate("welcomePage");
    }
  }, [fontsLoaded]);
  return (
    <View style={styles.root} onLayout={onLayoutRootView}>
      <View>
        <BacgroundImg />
      </View>
      <View style={styles.contentViewStyle}>
        <LOGO width={70} height={70} />
        <Text style={styles.textStyle}>WhatsApp</Text>
        <View style={styles.textLogostyle}>
          <TextLogo />
        </View>
      </View>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  root: { position: "relative" },
  bgStyleView: { width: "100%" },
  contentViewStyle: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  textStyle: {
    color: "#000",
    fontSize: 35,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  textLogostyle: {
    position: "absolute",
    bottom: 100,
  },
});
