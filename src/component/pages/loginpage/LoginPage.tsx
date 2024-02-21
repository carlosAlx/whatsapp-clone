import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text>LoginPage</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({ root: { display: "flex" } });
