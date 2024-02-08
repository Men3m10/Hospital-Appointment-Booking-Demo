import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

const ActionButton = () => {
  const actionList = [
    {
      id: 1,
      name: "Website",
      icon: "earth",
    },
    {
      id: 2,
      name: "Email",
      icon: "chatbubble-ellipses",
    },
    {
      id: 3,
      name: "Phone",
      icon: "phone-portrait",
    },
    {
      id: 4,
      name: "Direction",
      icon: "map",
    },
    {
      id: 5,
      name: "Share",
      icon: "share-sharp",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={actionList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={26} color={Colors.white} />
            </View>
            <Text style={styles.actionName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
  },
  itemContainer: {
    alignItems: "center",
    marginRight: 5,
    marginLeft: 5,
  },
  iconContainer: {
    backgroundColor: Colors.Secondary,
    width: 65,
    height: 65,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  actionName: {
    textAlign: "center",
    marginTop: 2,
    fontFamily: "app-font-Simi",
  },
});

export default ActionButton;
