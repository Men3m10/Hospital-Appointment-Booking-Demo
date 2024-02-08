import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

const Slider = () => {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSliders().then((res) => setSliderList(res.data.data));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sliderList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.attributes.Image.data.attributes.url }}
            style={styles.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  image: {
    width: Dimensions.get("screen").width * 0.9,
    height: 170,
    margin: 3,
    borderRadius: 10,
  },
});

export default Slider;
