import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingPage from "./src/component/pages/loadingpage/LoadingPage";
import WelcomePage from "./src/component/pages/welcomePage/WelcomePage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoadingPage /> */}
      <WelcomePage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
