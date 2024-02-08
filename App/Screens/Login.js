import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";

import React from "react";
import image1 from "./../../assets/3.png";
import Colors from "../../assets/Shared/Colors";
import SignInWithOAuth from "../Components/SignInWithOAuth";

const Login = () => {
  return (
    <View style={{ alignItems: "center", backgroundColor: Colors.Primary }}>
      {/* <StatusBar barStyle={"light-content"} /> */}
      <Image source={image1} style={styles.image} />

      <View
        style={{
          backgroundColor: Colors.white,
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          width: "100%",
          marginTop: -70,
        }}
      >
        <View style={{ marginTop: 10, alignItems: "center" }}>
          <Text style={styles.heading}>Your Ultimate Doctor</Text>
          <Text style={styles.heading}>Appointment Booking App</Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "400",
            fontSize: 17,
          }}
        >
          Book Appointments Effortlessly and manage your health journey
        </Text>
        <SignInWithOAuth />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 600,
    objectFit: "contain",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
