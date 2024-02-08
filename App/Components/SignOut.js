import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, TouchableOpacity, Dimensions, View, Text } from "react-native";
import { useAuth, useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import Colors from "../../assets/Shared/Colors";
import { AntDesign } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

const signOut = () => {
  const { isLoaded, signOut } = useAuth();

  return (
    <TouchableOpacity
      onPress={() => {
        signOut();
      }}
    >
      <View
        style={{
          padding: 16,
          backgroundColor: Colors.Secondary,
          borderRadius: 90,
          alignItems: "center",
          marginTop: 20,
          width: Dimensions.get("screen").width * 0.8,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ color: Colors.white, fontSize: 17, fontWeight: "400" }}>
          Sign Out
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default signOut;
