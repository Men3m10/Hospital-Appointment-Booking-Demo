import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../assets/Shared/Colors";
import PageHeader from "../Components/Shared/PageHeader";
import SignOut from "../Components/SignOut";

const Profile = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <View style={styles.container}>
      <PageHeader headerName="Profile" backButton={false} />
      <View style={styles.profileContainer}>
        <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.fullName}</Text>
          <Text style={styles.email}>
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <SignOut />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 70,
  },
  profileImage: {
    width: "50%",
    height: 200,
    borderRadius: 90,
  },
  userInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  userName: {
    fontSize: 24,
    fontFamily: "app-font-Bold",
  },
  email: {
    fontSize: 15,
    color: Colors.Secondary,
    marginTop: 5,
  },
});

export default Profile;
