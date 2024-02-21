import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingPage from "./src/component/pages/loadingpage/LoadingPage";
import WelcomePage from "./src/component/pages/welcomePage/WelcomePage";
import Otppage from "./src/component/pages/Otppage/Otppage";
import LoginPage from "./src/component/pages/loginpage/LoginPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcomePage"
        screenOptions={{ headerShown: false, contentStyle: styles.container }}
      >
        <Stack.Screen name="welcomePage" component={WelcomePage} />
        <Stack.Screen name="loadingPage" component={LoadingPage} />
        <Stack.Screen name="loginPage" component={LoginPage} />
        <Stack.Screen name="otpPage" component={Otppage} />
      </Stack.Navigator>
    </NavigationContainer>
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
