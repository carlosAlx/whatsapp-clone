import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { OtpInput } from "react-native-otp-entry";

const OtpPage = ({ navigation }: any) => {
  return (
    <View style={styles.root}>
      <Appbar.Header
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Enter OTP Code" />
      </Appbar.Header>
      <View style={styles.mainStyle}>
        <View style={styles.contentStyle}>
          <Text>Code has been send to +91 8765432098</Text>
          <OtpInput
            theme={{ pinCodeTextStyle: styles.textInputStyle }}
            numberOfDigits={4}
          />
          <Text>
            Resend Code in
            <Text style={styles.secondTextStyle}> 56 </Text>s
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate("homePage");
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>Verify</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    height: "93%",
  },
  mainStyle: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  contentStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  secondTextStyle: {
    color: "#00A884",
  },
  buttonStyle: {
    height: 53,
    width: "90%",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
  textInputStyle: {
    borderRadius: 10,
  },
});
