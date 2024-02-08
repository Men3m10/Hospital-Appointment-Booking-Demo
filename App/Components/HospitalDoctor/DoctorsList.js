import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import DoctorsCardItem from "../Shared/DoctorsCardItem";

const DoctorsList = ({ doctorList }) => {
  return (
    <View>
      {doctorList ? (
        <FlatList
          data={doctorList}
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <DoctorsCardItem item={item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noDoctorsText}>No Doctors in This Field</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 20,
    marginBottom: 150,
  },
  noDoctorsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default DoctorsList;
