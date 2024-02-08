import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import Header from "../Components/Home/Header";
import SearchBar from "../Components/Home/SearchBar";
import Slider from "../Components/Home/Slider";
import Category from "../Components/Home/Category";
import PremiumHospital from "../Components/Home/PremiumHospital";

const Home = () => {
  const { isLoaded, signOut } = useAuth();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        padding: 20,
        marginTop: 20,
      }}
    >
      <Header />
      <SearchBar setSearchText={(val) => console.log(val)} />
      <Slider />
      <Category />
      <PremiumHospital />

      {/* <Button
        title="SignOut"
        onPress={() => {
          signOut();
        }}
      /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
