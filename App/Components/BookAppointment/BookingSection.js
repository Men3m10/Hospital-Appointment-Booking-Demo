import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import moment from "moment";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "../Home/SubHeading";
import { useUser } from "@clerk/clerk-expo";
import GlobalApi from "../../Services/GlobalApi";

const BookingSection = ({ hospital }) => {
  const { isLoaded, isSignedIn, user } = useUser();

  const [next7Days, setNext7Days] = useState([]);
  const [times, setTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [notes, setNotes] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getDays();
    getTime();
  }, []);

  const getDays = () => {
    const today = moment();
    const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
      const date = moment(today).add(i + 1, "days");
      return {
        date: date,
        day: date.format("ddd"),
        formattedDate: date.format("Do MMM"),
      };
    });
    setNext7Days(nextSevenDays);
  };

  const getTime = () => {
    const timelist = [];
    for (let i = 8; i < 12; i++) {
      timelist.push(`${i}:00 AM`, `${i}:30 AM`);
    }
    for (let i = 1; i < 6; i++) {
      timelist.push(`${i}:00 PM`, `${i}:30 PM`);
    }
    setTimes(timelist);
  };

  const handleDayPress = (date) => {
    setSelectedDate(date);
  };

  const handleTimePress = (time) => {
    setSelectedTime(time);
  };

  const BookAppointment = () => {
    setLoader(true);
    const data = {
      data: {
        UserName: user.fullName,
        Email: user.primaryEmailAddress.emailAddress,
        Date: selectedDate,
        Time: selectedTime,
        hospitals: hospital.id,
        Note: notes,
      },
    };
    GlobalApi.createAppointment(data).then((res) => {
      setLoader(false);
      ToastAndroid.show(" Appointment Booked!", ToastAndroid.SHORT);
      setNotes("");
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Book Appointment</Text>
      <SubHeading title="Day" seeAll={false} />
      <FlatList
        data={next7Days}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.button,
              selectedDate === item.date ? styles.selectedButton : null,
            ]}
            onPress={() => handleDayPress(item.date)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedDate === item.date ? styles.selectedText : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                styles.buttonText,
                selectedDate === item.date ? styles.selectedText : null,
              ]}
            >
              {item.formattedDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading title="Time" seeAll={false} />
      <FlatList
        data={times}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.button,
              styles.timeButton,
              selectedTime === item ? styles.selectedButton : null,
            ]}
            onPress={() => handleTimePress(item)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedTime === item ? styles.selectedText : null,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading title="Note" seeAll={false} />

      <TextInput
        numberOfLines={3}
        style={styles.notesInput}
        placeholder="Write Notes Here"
        placeholderTextColor={Colors.white}
        onChangeText={(text) => setNotes(text)}
      />

      <TouchableOpacity style={styles.button2} onPress={BookAppointment}>
        {loader ? (
          <ActivityIndicator size={20} color={Colors.white} />
        ) : (
          <Text style={styles.buttonText2}>Make Appointment</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.Gray2,
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 90,
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
    borderColor: Colors.Gray2,
  },
  timeButton: {
    paddingVertical: 10,
  },
  buttonText: {
    fontFamily: "app-font-Simi",
  },
  selectedButton: {
    backgroundColor: Colors.Secondary,
  },
  selectedText: {
    color: Colors.white,
  },
  button2: {
    padding: 13,
    backgroundColor: Colors.Primary,
    margin: 10,
    borderRadius: 99,
    left: 0,
    right: 0,
    marginBottom: 100,
    zIndex: 20,
  },
  buttonText2: {
    textAlign: "center",
    color: Colors.white,
    fontFamily: "app-font-Simi",
    fontSize: 18,
  },
  notesInput: {
    backgroundColor: Colors.Gray,
    borderRadius: 10,
    padding: 15,
    borderColor: Colors.Secondary,
    borderWidth: 0.5,
    textAlign: "center",
  },
});

export default BookingSection;
