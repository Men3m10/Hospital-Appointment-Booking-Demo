import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";

const SearchBar = ({ setSearchText }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchText(searchInput);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={24}
        color={Colors.Primary}
        style={styles.icon}
      />
      <TextInput
        placeholder="Search"
        maxLength={20}
        onChangeText={setSearchInput}
        onSubmitEditing={handleSearch}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 8,
    borderColor: Colors.Gray,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
  },
});

export default SearchBar;
