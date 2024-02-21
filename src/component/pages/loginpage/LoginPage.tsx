import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import React from "react";
import DropDown from "../../../../assets/svg/dropdown.svg";

const LoginPage = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.contentStyle}>
        <Text style={styles.titleStyle}>Enter your phone number</Text>
        <Text style={styles.descStyle}>
          WhatsApp will need to verify your phone number.
          <Text style={styles.linkStyle} onPress={() => {}}>
            What's my number?
          </Text>
        </Text>
        <Pressable
          style={styles.countryButtonView}
          onPress={() => {
            navigation.navigate("countryPage");
          }}
        >
          <Text style={styles.countryTextStyle}>India</Text>
          <DropDown />
        </Pressable>
        <View style={styles.inputViewStyle}>
          <View style={styles.countryButtonView}>
            <Text style={styles.countryTextStyle}>+91</Text>
          </View>
          <TextInput style={styles.textInputStyle} />
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("otpPage");
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonTextStyle}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
  },
  contentStyle: {
    width: "80%",
    display: "flex",
    gap: 15,
  },
  countryButtonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#00A884",
  },
  inputViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  countryTextStyle: {
    fontSize: 14,
    fontWeight: "400",
    paddingHorizontal: 10,
  },
  textInputStyle: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: "#00A884",
    letterSpacing: 1.2,
  },

  buttonStyle: {
    width: 90,
    padding: 10,
    backgroundColor: "#00A884",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 40,
  },
  titleStyle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Roboto-Bold",
    letterSpacing: 0.3,
  },
  descStyle: {
    color: "#000",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    paddingVertical: 18,
  },
  linkStyle: {
    color: "#0C42CC",
    fontSize: 13,
    fontWeight: "400",
  },
  buttonTextStyle: {
    color: "#000",
    fontSize: 14,
    fontWeight: "400",
  },
});
