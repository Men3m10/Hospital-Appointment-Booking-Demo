import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import GlobalApi from "../../Services/GlobalApi";
import SubHeading from "./SubHeading";
import Colors from "../../../assets/Shared/Colors";
import HospitalItems from "./HospitalItems";
import { useNavigation } from "@react-navigation/native";

const PremiumHospital = () => {
  const [hospitalsList, setHospitalsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await GlobalApi.getPremiumHospitals();
      setHospitalsList(response.data.data);
    } catch (error) {
      console.error("Error fetching premium hospitals:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SubHeading title={"Our Premium Hospitals"} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.Primary}
          style={styles.loadingIndicator}
        />
      ) : (
        <FlatList
          data={hospitalsList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("HospitalDetails", { hospitalData: item })
              }
            >
              <HospitalItems hospital={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default PremiumHospital;
