import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PageHeader = ({ headerName, backButton = true }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
        marginTop: 20,
      }}
    >
      {backButton && (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={40}
              color="black"
            />
          </TouchableOpacity>
        </View>
      )}

      <View>
        <Text style={{ fontSize: 25, fontFamily: "app-font-Simi" }}>
          {headerName}
        </Text>
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({});
