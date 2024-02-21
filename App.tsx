import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingPage from "./src/component/pages/loadingpage/LoadingPage";
import WelcomePage from "./src/component/pages/welcomePage/WelcomePage";
import Otppage from "./src/component/pages/Otppage/Otppage";
import LoginPage from "./src/component/pages/loginpage/LoginPage";
import CountryPage from "./src/component/pages/loginpage/CountryPage";
import HomePage from "./src/component/pages/homePage/HomePage";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loadingPage"
        screenOptions={{ headerShown: false, contentStyle: styles.container }}
      >
        <Stack.Screen name="welcomePage" component={WelcomePage} />
        <Stack.Screen name="homePage" component={HomePage} />
        <Stack.Screen name="loadingPage" component={LoadingPage} />
        <Stack.Screen name="loginPage" component={LoginPage} />
        <Stack.Screen name="otpPage" component={Otppage} />
        <Stack.Screen name="countryPage" component={CountryPage} />
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
