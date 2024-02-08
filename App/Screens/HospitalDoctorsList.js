import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import HospitalDoctorTab from "../Components/HospitalDoctor/HospitalDoctorTab";
import HospitalListByCategory from "../Components/HospitalDoctor/HospitalListByCategory";
import GlobalApi from "../Services/GlobalApi";
import Colors from "../../assets/Shared/Colors";
import DoctorsList from "../Components/HospitalDoctor/DoctorsList";

const HospitalDoctorsList = () => {
  const param = useRoute().params;

  const [hospitalList, setHospitalList] = useState([]);
  const [doctorsList, setDoctorsList] = useState([]);
  const [activeTab, setActiveTab] = useState("Hospitals");

  useEffect(() => {
    getHospitals();
    getDoctors();
  }, []);

  const getHospitals = () => {
    GlobalApi.getHospitalsByCategory(param.categoryName).then((res) => {
      setHospitalList(res.data.data);
      //  console.log(res.data.data);
    });
  };

  const getDoctors = () => {
    GlobalApi.getDoctorsByCategoryAndHospital(param.categoryName).then(
      (res) => {
        setDoctorsList(res.data.data);
        // console.log(res.data.data);
      }
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <PageHeader headerName={param.categoryName} />

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

export default HospitalDoctorsList;

const styles = StyleSheet.create({});
