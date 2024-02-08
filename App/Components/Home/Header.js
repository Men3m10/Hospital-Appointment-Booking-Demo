import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Hello, 👋</Text>
          <Text style={styles.userName}>{user.fullName}</Text>
        </View>
      </View>
      <View>
        <Ionicons name="notifications-outline" size={30} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 15,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  userInfo: {
    marginLeft: 10,
  },
  greeting: {
    fontFamily: "app-font",
  },
  userName: {
    fontSize: 18,
    fontFamily: "app-font-Bold",
  },
});

export default Header;
