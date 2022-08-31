import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAtom } from "jotai";
import { userPasswordAtom } from "../config/atoms";
import { userNameAtom } from "../config/atoms";
import { auth } from "../../firebase";
import CheckBox from "@react-native-community/checkbox";
import AppButton from "../components/AppButton";
import * as Progress from "react-native-progress";

const Password = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);
  const [userName, setUserName] = useAtom(userNameAtom);
  console.log(userNameAtom);
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(userName, userPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.push("TabNavigator");
        console.log(userNameAtom);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerKeyboard}
    >
      <Progress.Bar
        progress={1}
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
        <Text style={styles.text}>En az 6 karakterden oluşan</Text>
        <Text style={styles.text}>bir parola girmelisin</Text>
        <TextInput
          style={styles.input}
          placeholder="Parola"
          secureTextEntry={true}
          value={userPassword}
          onChangeText={(userPassword) => setUserPassword(userPassword)}
        />
        <View style={styles.check}>
          <View style={{ backgroundColor: "#FFFFFF" }}>
            <CheckBox
              tintColor="#FFFFFF"
              onTintColor="#000000"
              onCheckColor="#000000"
              offAnimationType="bounce"
              onFillColor="#FFFFFF"
              boxType="square"
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
          </View>

          <Text style={styles.checkColorText}>
            {"  "}
            Kullanım Koşulları, Gizlilik Politikası{" "}
            <Text style={{ color: "#737373" }}>ve</Text> KVKK Metnini
            {"\n "}{" "}
            <Text style={{ color: "#737373" }}>okudum onaylıyorum.</Text>
          </Text>
        </View>

        <View style={styles.button}>
          <AppButton
            title="Tamamla"
            textcolor="black"
            color="white"
            onPress={handleSignUp}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
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
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontFamily: "Gilroy-Medium",
  },
  input: {
    height: 50,
    width: "90%",
    marginTop: 90,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    fontFamily: "Gilroy-SemiBold",
    fontSize: 18,
  },
  button: {
    width: "90%",
    height: 57,
    marginTop: 10,
    marginBottom: 10,
  },
  containerKeyboard: { flex: 1, backgroundColor: "white" },
  check: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 57,
  },
  checkColorText: {
    color: "#844AFF",
    fontSize: 12,
    fontFamily: "Gilroy-Medium",
  },
});

export default Password;
