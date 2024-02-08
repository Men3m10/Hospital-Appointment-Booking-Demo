import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";

const HospitalAppointmentInfo = ({ Data }) => {
  return (
    Data && (
      <View>
        <PageHeader headerName={"Book an Appointment"} />
        <View style={styles.infoContainer}>
          <Image
            source={{
              uri: Data.attributes.image.data[0].attributes.url,
            }}
            style={styles.image}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.hospitalName}>{Data.attributes.Name}</Text>
            <View style={styles.addressContainer}>
              <Ionicons name="location" size={20} color={Colors.Primary} />
              <Text style={styles.addressText}>{Data.attributes.Address}</Text>
            </View>
          </View>
        </View>
        <HorizontalLine />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 99,
  },
  detailsContainer: {
    flex: 1,
  },
  hospitalName: {
    fontSize: 20,
    fontFamily: "app-font-Simi",
    marginBottom: 8,
  },
  addressContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  addressText: {
    fontSize: 14,
    fontFamily: "app-font",
    color: Colors.Gray2,
    width: "70%",
  },
});

export default HospitalAppointmentInfo;
