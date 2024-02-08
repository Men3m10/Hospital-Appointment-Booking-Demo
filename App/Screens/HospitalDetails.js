import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../../assets/Shared/Colors";
import PageHeader from "../Components/Shared/PageHeader";
import Hospitalinfo from "../Components/Hospitaldetail/Hospitalinfo";

const HospitalDetails = () => {
  const [hospitalData, setHospitalData] = useState(null);
  const navigation = useNavigation();
  const param = useRoute().params;

  useEffect(() => {
    if (param && param.hospitalData) {
      setHospitalData(param.hospitalData);
    }
  }, [param]);

  return (
    hospitalData && (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <PageHeader headerName={""} />
          </View>

          <View>
            <Image
              source={{
                uri: hospitalData.attributes.image.data[0].attributes.url,
              }}
              style={styles.image}
            />
            <View style={styles.infoContainer}>
              <Hospitalinfo Data={hospitalData} />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("BookAppointment", {
              hospitalData: hospitalData,
            });
          }}
        >
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    position: "absolute",
    zIndex: 15,
    margin: 15,
  },
  image: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
  },
  infoContainer: {
    marginTop: -20,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  button: {
    padding: 13,
    backgroundColor: Colors.Primary,
    margin: 10,
    borderRadius: 99,
    left: 0,
    right: 0,
    marginBottom: 10,
    zIndex: 20,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.white,
    fontFamily: "app-font-Simi",
    fontSize: 18,
  },
});

export default HospitalDetails;
