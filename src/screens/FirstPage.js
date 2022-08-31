import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AppButton from "../components/AppButton";

const FirstPage = ({ navigation }) => {
  return (
    <LinearGradient colors={["#EAE0FF", "white"]} style={styles.container}>
      <View style={styles.mainContainer}>
        <Image
          style={(position = "absolute")}
          source={require("../assets/firstpage.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Ruh eşini keşfetmeye hazır mısın ?</Text>
          <Text style={styles.subText}>
            Doğum haritanda gizlenen sırları keşfet,
          </Text>
          <Text style={styles.subText}>kadim bilgiye kulak ver!</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Giriş Yap"
          font="Gilroy-SemiBold"
          fontSize={22}
          onPress={() => {
            navigation.push("Login");
          }}
        />
        <AppButton
          title="Hesap Oluştur"
          color="secondary"
          font="Gilroy-SemiBold"
          fontSize={22}
          onPress={() => {
            navigation.push("Signin");
          }}
        />
        <Text style={styles.centerBottomText}>
          Devam ederek
          <Text style={styles.bottomText}> Kullanım Koşullarımızı</Text> ve
          <Text style={styles.bottomText}> Gizlilik Politikamızı</Text> kabul
          etmiş sayılırsınız.
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Gilroy-Bold",
  },
  bottomText: { color: "#6523F1" },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "95%",
  },
  subText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Gilroy-Light",
  },
  centerBottomText: { textAlign: "center", fontFamily: "Gilroy-Medium" },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    bottom: 70,
    justifyContent: "flex-start",
  },
});

export default FirstPage;
