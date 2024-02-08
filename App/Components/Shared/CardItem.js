import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";

const CardItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.attributes.image.data[0].attributes.url }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.attributes.Name}</Text>
        <Text style={styles.email}>{item.attributes.Email}</Text>
        <Text style={styles.description}>{item.attributes.Description}</Text>
        <FlatList
          data={item.attributes.categories.data}
          horizontal={true}
          renderItem={({ item, index }) =>
            index < 3 && (
              <Text style={styles.category}>{item.attributes.Name}</Text>
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageContainer: {
    width: "50%",
    marginRight: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  contentContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "app-font-Simi",
  },
  email: {
    fontSize: 12,
    color: Colors.Primary,
    marginTop: 3,
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    fontFamily: "app-font",
    textAlign: "center",
  },
  category: {
    fontSize: 11,
    color: Colors.Gray2,
    marginTop: 3,
    marginBottom: 3,
  },
});

export default CardItem;
