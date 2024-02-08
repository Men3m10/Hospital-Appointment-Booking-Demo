import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, LogBox } from "react-native";
import Login from "./App/Screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from "expo-font";

LogBox.ignoreLogs(["Linking requires a build-time setting"]);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "app-font": require("./assets/fonts/static/Outfit-Regular.ttf"),
    "app-font-Bold": require("./assets/fonts/static/Outfit-Bold.ttf"),
    "app-font-Simi": require("./assets/fonts/static/Outfit-SemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ClerkProvider
      publishableKey={"pk_test_ZnVsbC1tYWNhdy0yNy5jbGVyay5hY2NvdW50cy5kZXYk"}
    >
      <SignedIn>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
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
