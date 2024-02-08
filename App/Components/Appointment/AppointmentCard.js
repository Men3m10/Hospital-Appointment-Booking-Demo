import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";

const AppointmentCard = ({ data }) => {
  return (
    data && (
      <View style={styles.container}>
        <Text style={styles.hospitalName}>
          {data.attributes.hospitals.data[0].attributes.Name}
        </Text>
        <Text style={styles.address}>
          {data.attributes.hospitals.data[0].attributes.Address}
        </Text>
        <Text style={styles.dateTime}>
          {data.attributes.Date.slice(0, 10)} - {data.attributes.Time}
        </Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 10,
    margin: 5,
  },
  hospitalName: {
    fontSize: 20,
    fontFamily: "app-font-Bold",
  },
  address: {
    fontSize: 16,
    fontFamily: "app-font",
  },
  dateTime: {
    fontSize: 16,
    fontFamily: "app-font-Simi",
    color: Colors.Primary,
  },
});

export default AppointmentCard;
