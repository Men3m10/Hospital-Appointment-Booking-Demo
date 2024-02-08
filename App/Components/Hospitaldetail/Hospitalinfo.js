import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "./ActionButton";
import SubHeading from "../Home/SubHeading";

const HospitalInfo = ({ Data }) => {
  return (
    Data && (
      <View>
        <Text style={styles.name}>{Data.attributes.Name}</Text>

        <FlatList
          data={Data.attributes.categories.data}
          horizontal={true}
          renderItem={({ item, index }) =>
            index < 3 && (
              <Text style={styles.category}>{item.attributes.Name}</Text>
            )
          }
        />

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Ionicons name="location" size={20} color={Colors.Primary} />
            <Text style={styles.infoText}>{Data.attributes.Address}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time" size={20} color={Colors.Primary} />
            <Text style={styles.infoText}>Sat - Fri | 9am to 7pm</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <ActionButton />

        <View style={styles.divider} />

        <SubHeading title={"About"} />
        <Text style={styles.description}>{Data.attributes.Description}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 23,
    fontFamily: "app-font-Simi",
  },
  category: {
    fontSize: 12,
    marginRight: 3,
    color: Colors.Gray2,
    marginTop: 3,
    marginBottom: 3,
  },
  infoContainer: {
    borderTopWidth: 1,
    borderColor: Colors.Gray2,
    marginTop: 10,
  },
  infoItem: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginTop: 5,
    padding: 5,
  },
  infoText: {
    fontSize: 14,
    fontFamily: "app-font",
    color: Colors.Gray2,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: Colors.Gray2,
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    fontFamily: "app-font",
    textAlign: "center",
  },
});

export default HospitalInfo;
