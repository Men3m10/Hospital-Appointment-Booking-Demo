import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, TouchableOpacity, Dimensions, View, Text } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import Colors from "../../assets/Shared/Colors";
import { AntDesign } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 16,
          backgroundColor: Colors.Primary,
          borderRadius: 90,
          alignItems: "center",
          marginTop: 20,
          width: Dimensions.get("screen").width * 0.8,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ color: Colors.white, fontSize: 17, fontWeight: "400" }}>
          Sign in with Google
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default SignInWithOAuth;
