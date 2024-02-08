import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import HospitalDoctorTab from "../Components/HospitalDoctor/HospitalDoctorTab";
import HospitalListByCategory from "../Components/HospitalDoctor/HospitalListByCategory";
import DoctorsList from "../Components/HospitalDoctor/DoctorsList";
import Colors from "../../assets/Shared/Colors";
import GlobalApi from "../Services/GlobalApi";

const Explore = () => {
  const [hospitalList, setHospitalList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [activeTab, setActiveTab] = useState("Hospitals");

  useEffect(() => {
    getAllHospitals();
    getAllDoc();
  }, []);

  const getAllHospitals = () => {
    GlobalApi.getAllHospitals().then((res) => {
      setHospitalList(res.data.data);
    });
  };

  const getAllDoc = () => {
    GlobalApi.getAllDoc().then((res) => {
      setDoctorsList(res.data.data);
    });
  };

  return (
    <View style={{ padding: 25 }}>
      <Text style={{ fontSize: 26, fontFamily: "app-font-Simi" }}>Explore</Text>

      <HospitalDoctorTab activeTab={(val) => setActiveTab(val)} />

      {!hospitalList?.length ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.Primary}
          style={{ marginTop: "50%" }}
        />
      ) : activeTab === "Hospitals" ? (
        <HospitalListByCategory hospitalList={hospitalList} />
      ) : (
        <DoctorsList doctorList={doctorsList} />
      )}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
