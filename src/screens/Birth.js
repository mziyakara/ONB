import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppButton from "../components/AppButton";
import * as Progress from "react-native-progress";

const Birth = ({ navigation, onChangeStepId }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [isDateChanged, setIsDateChanged] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(true);
    setDate(currentDate);
    setIsDateChanged(true);
  };

  const showMode = (currentMode) => {
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const datePick = () => {
    return (
      <DateTimePicker showDatepicker={true} value={date} onChange={onChange} />
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerKeyboard}
    >
      <Progress.Bar
        progress={0.5}
        width={Dimensions.get("window").width}
        height={12}
        borderWidth={0}
        borderRadius={10}
        color="#844AFF"
        unfilledColor="#F0F0F0"
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/moonstars.png")}
        />
        <Text style={styles.text}>Doğum tarihin nedir?</Text>
        <TouchableOpacity
          onPress={() => {
            datePick();
          }}
          style={styles.dateContainer}
        >
          <DateTimePicker
            maximumDate={new Date()}
            value={date}
            onChange={onChange}
          />
        </TouchableOpacity>
        <View style={styles.button}>
          <AppButton
            title="Devam Et"
            textcolor="black"
            color={isDateChanged == false ? "grey" : "white"}
            disable={isDateChanged == false ? true : false}
            onPress={() => {
              navigation.push("Photo");
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1624",
    width: "90%",
    alignSelf: "center",
    marginTop: "30%",
    borderRadius: 20,
    alignItems: "center",
  },
  image: { marginLeft: 30 },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginTop: 50,
    fontFamily: "Gilroy-Medium",
  },
  button: {
    width: "90%",
    height: 57,
    marginTop: 90,
    marginBottom: 10,
  },
  containerKeyboard: { flex: 1, backgroundColor: "white" },
  dateContainer: {
    justifyContent: "center",
    paddingRight: 100,
    marginTop: 100,
    height: 50,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Birth;
