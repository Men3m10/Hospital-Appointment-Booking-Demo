import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "../Components/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import AppointmentCard from "../Components/Appointment/AppointmentCard";

const Appointment = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [appointment, setAppointment] = useState();
  useEffect(() => {
    if (user.firstName) {
      getMyAppointment();
    }
  }, [user]);
  const getMyAppointment = () => {
    GlobalApi.getMyAppointments(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        setAppointment(res.data.data);
      }
    );
  };
  return (
    <View style={{ padding: 20 }}>
      <PageHeader headerName={"My Appointments"} backButton={false} />
      <FlatList
        data={appointment}
        renderItem={({ item }) => <AppointmentCard data={item} />}
      />
    </View>
  );
};

export default Appointment;

const styles = StyleSheet.create({});
