import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalApi from "../../Services/GlobalApi";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "./SubHeading";

const Category = () => {
  const navigation = useNavigation();
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await GlobalApi.getCategories();
      setCategoriesList(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  if (!categoriesList.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SubHeading title={"Doctor Specialty"} />
      <FlatList
        data={categoriesList.slice(0, 4)}
        numColumns={4}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() =>
              navigation.navigate("Hospital-Doc-List", {
                categoryName: item.attributes.Name,
              })
            }
          >
            <View style={styles.categoryIconContainer}>
              <Image
                source={{ uri: item.attributes.Icon.data.attributes.url }}
                style={styles.categoryIcon}
              />
            </View>
            <Text style={styles.categoryName}>{item.attributes.Name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryIconContainer: {
    backgroundColor: Colors.Light,
    padding: 15,
    borderRadius: 99,
  },
  categoryIcon: {
    width: 40,
    height: 40,
  },
  categoryName: {
    marginTop: 5,
  },
});

export default Category;
