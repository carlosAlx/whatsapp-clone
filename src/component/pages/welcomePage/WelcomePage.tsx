import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import WelcomeArt from "../../../../assets/svg/welcome_page_art.svg";
import TextLogo from "../../../baseui/TextLogo/TextLogo";
import { useNavigation } from "@react-navigation/native";

const WelcomePage = ({ navigation }: any) => {
  return (
    <View style={styles.root}>
      <Text style={styles.titleStyle}>Welcome to WhatsApp</Text>
      <WelcomeArt />
      <Text style={styles.descTextStyle}>
        Read our
        <Text style={styles.linkPrivacy} onPress={() => {}}>
          Privacy Policy.
        </Text>
        Tap "Agree and continue" to accept the{" "}
        <Text style={styles.linkPrivacy} onPress={() => {}}>
          Teams of Service.
        </Text>
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate("loginPage");
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.textButtonStyle}>agree and continue</Text>
      </Pressable>
      <TextLogo />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    gap: 45,
  },
  titleStyle: {
    fontFamily: "Roboto",
    color: "#000",
    fontSize: 25,
    fontWeight: "500",
  },
  descTextStyle: {
    fontFamily: "Roboto",
    color: "#000",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  linkPrivacy: {
    color: "#4715FF",
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: "#086335",
    width: "70%",
  },
  textButtonStyle: {
    color: "#fff",
    padding: 10,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
