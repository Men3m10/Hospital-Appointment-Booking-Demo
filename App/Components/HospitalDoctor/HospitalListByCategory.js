import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

import CardItem from "../Shared/CardItem";
import { useNavigation } from "@react-navigation/native";

const HospitalListByCategory = ({ hospitalList }) => {
  const navigation = useNavigation();

  const handleHospitalPress = (item) => {
    navigation.navigate("HospitalDetails", {
      hospitalData: item,
    });
  };

  return (
    <View>
      <FlatList
        data={hospitalList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleHospitalPress(item)}>
            <CardItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HospitalListByCategory;
