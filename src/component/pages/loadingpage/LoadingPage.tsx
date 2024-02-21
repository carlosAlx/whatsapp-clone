import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadingPage = () => {
  return (
    <View style={styles.root}>
      <View></View>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({ root: { position: "relative" } });
