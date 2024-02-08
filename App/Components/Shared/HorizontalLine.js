import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";

const HorizontalLine = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: Colors.Gray,
        margin: 5,
        marginBottom: 15,
      }}
    />
  );
};

export default HorizontalLine;

const styles = StyleSheet.create({});
