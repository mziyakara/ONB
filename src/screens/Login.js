import React from "react";
import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import AppButton from "../components/AppButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAtom } from "jotai";
import { userNameAtom, userPasswordAtom } from "../config/atoms";
import { auth } from "../../firebase";

const Login = ({ navigation }) => {
  const [userName, setUserName] = useAtom(userNameAtom);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);

  const handleLogIn = () => {
    auth
      .signInWithEmailAndPassword(userName, userPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.push("TabNavigator");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerKeyboard}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/moonstars.png")}
        />
        <Text style={styles.text}>
          <Text style={styles.karmaText}>Karma</Text>'ya hoşgeldin!
        </Text>
        <Text style={styles.subText}>Haydi maceraya başlayalım!</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
        />
        <TextInput
          style={styles.inputTwo}
          placeholder="Parola"
          secureTextEntry={true}
          value={userPassword}
          onChangeText={(userPassword) => setUserPassword(userPassword)}
        />
        <View style={styles.button}>
          <AppButton
            title="Giriş Yap"
            textcolor="black"
            color="white"
            onPress={handleLogIn}
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
  image: { marginLeft: 30 },
  text: {
    fontSize: 36,
    color: "white",
    textAlign: "center",
    fontFamily: "Gilroy-Medium",
  },
  karmaText: { fontFamily: "Gilroy-Bold", textAlign: "center" },
  subText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontFamily: "Gilroy-Medium",
  },
  input: {
    height: 50,
    width: "90%",
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    fontFamily: "Gilroy-SemiBold",
    fontSize: 18,
  },
  inputTwo: {
    height: 50,
    width: "90%",
    margin: 10,
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
    marginTop: 90,
    marginBottom: 10,
  },
  containerKeyboard: { flex: 1, backgroundColor: "white" },
});

export default Login;
const clickLogin = () => {};
