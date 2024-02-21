import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

const HomePage = () => {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <Text style={styles.text}>Success</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "#00ff0d",
  },
});
