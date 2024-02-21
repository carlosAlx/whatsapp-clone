import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BacgroundImg from "../../../../assets/svg/loading_background.svg";
import LOGO from "../../../../assets/svg/logo_1.svg";

const LoadingPage = () => {
  return (
    <View style={styles.root}>
      <View>
        <BacgroundImg />
      </View>
      <View style={styles.contentViewStyle}>
        <LOGO width={70} height={70}/>
        <Text style={styles.textStyle}>WhatsApp</Text>
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
  textStyle:{
    color: "#000",
    fontSize: 35,
    fontFamily: "Roboto",
    fontWeight: "bold",
  }
});
