import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Colors from "../../../assets/Shared/Colors";

const HospitalDoctorTab = ({ activeTab }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.tabContainer,
          activeIndex === 0 ? styles.activeTab : styles.inActiveTab,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(0);
            activeTab("Hospitals");
          }}
        >
          <Text
            style={[
              styles.tabText,
              activeIndex === 0 ? styles.activeText : styles.inActiveText,
            ]}
          >
            Hospitals
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.tabContainer,
          activeIndex === 1 ? styles.activeTab : styles.inActiveTab,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            setActiveIndex(1);
            activeTab("Doctors");
          }}
        >
          <Text
            style={[
              styles.tabText,
              activeIndex === 1 ? styles.activeText : styles.inActiveText,
            ]}
          >
            Doctors
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  tabContainer: {
    padding: 3,
    width: "40%",
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray2,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.Primary,
  },
  inActiveTab: {},
  tabText: {
    textAlign: "center",
    fontFamily: "app-font",
    fontSize: 18,
  },
  activeText: {
    color: Colors.Primary,
  },
  inActiveText: {
    color: Colors.Gray2,
  },
});

export default HospitalDoctorTab;
