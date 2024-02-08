import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";

const HospitalItems = ({ hospital }) => {
  return (
    <View
      style={[
        styles.container,
        { width: Dimensions.get("screen").width * 0.6 },
      ]}
    >
      <Image
        source={{ uri: hospital.attributes.image.data[0].attributes.url }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{hospital.attributes.Name}</Text>
        <Text style={styles.address}>{hospital.attributes.Address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  image: {
    height: 170,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: "cover", // Use resizeMode instead of objectFit
  },
  infoContainer: {
    padding: 7,
  },
  name: {
    fontFamily: "app-font-Simi",
    fontSize: 16,
  },
  address: {
    color: Colors.Gray2,
  },
});

export default HospitalItems;
