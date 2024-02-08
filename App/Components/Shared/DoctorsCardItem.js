import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";

import { MaterialIcons } from "@expo/vector-icons";

const DoctorsCardItem = ({ item }) => {
  return (
    <View
      style={{
        display: "flex",
        marginTop: 10,
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          margin: 10,
          display: "flex",
          flexDirection: "row",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <View style={{ width: "40%", marginRight: 5 }}>
          <Image
            source={{
              uri: item.attributes.image.data.attributes.url,
            }}
            style={{
              width: "100%",
              height: 150,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              objectFit: "cover",
            }}
          />
        </View>
        <View>
          <View
            style={{
              padding: 10,
              borderRadius: 25,
              backgroundColor: Colors.Secondary,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name="verified-user"
              size={17}
              color={Colors.white}
            />
            <Text
              style={{
                fontFamily: "app-font",
                fontSize: 13,
                color: Colors.white,
                textAlign: "center",
              }}
            >
              Proffessional Doctor
            </Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontFamily: "app-font-Bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
              Dr. {item.attributes.Name}
            </Text>
            <Text
              style={{
                fontFamily: "app-font",
                fontSize: 16,
                color: Colors.Gray2,
                marginVertical: 5,
              }}
            >
              {item.attributes.category.data.attributes.Name}
            </Text>
            <Text
              style={{
                fontFamily: "app-font",
                fontSize: 16,
                color: Colors.Primary,
                marginVertical: 5,
              }}
            >
              {item.attributes.Year_of_Experience} Years
            </Text>
            <Text
              style={{
                fontFamily: "app-font",
                fontSize: 16,
                color: Colors.Primary,
                marginVertical: 5,
              }}
            >
              {item.attributes.Address.length >= 20
                ? item.attributes.Address.slice(0, 20) + ".."
                : item.attributes.Address}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={{
            width: "95%",
            alignItems: "center",
            backgroundColor: Colors.Secondary,
            padding: 15,
            borderRadius: 10,

            marginLeft: 10,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 15,
              fontFamily: "app-font-Simi",
            }}
          >
            Make an Appointment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorsCardItem;

const styles = StyleSheet.create({});
