import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import HospitalDoctorsList from "../Screens/HospitalDoctorsList";
import HospitalDetails from "../Screens/HospitalDetails";
import BookAppointment from "../Screens/BookAppointment";

const stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Hospital-Doc-List" component={HospitalDoctorsList} />
      <stack.Screen name="HospitalDetails" component={HospitalDetails} />
      <stack.Screen name="BookAppointment" component={BookAppointment} />
    </stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
