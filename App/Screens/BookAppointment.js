import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import HospitalAppointmentInfo from "../Components/BookAppointment/HospitalAppointmentInfo";
import ActionButton from "../Components/Hospitaldetail/ActionButton";
import HorizontalLine from "../Components/Shared/HorizontalLine";
import BookingSection from "../Components/BookAppointment/BookingSection";
import { useUser } from "@clerk/clerk-expo";

const BookAppointment = () => {
  const [hospitalData, setHospitalData] = useState(null);
  const param = useRoute().params;

  useEffect(() => {
    if (param && param.hospitalData) {
      setHospitalData(param.hospitalData);
    }
  }, [param]);
  return (
    <ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
      <HospitalAppointmentInfo Data={hospitalData} />
      <ActionButton />
      <HorizontalLine />

      <KeyboardAvoidingView behavior="padding" style={{ maxHeight: "30%" }}>
        <BookingSection hospital={hospitalData} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
