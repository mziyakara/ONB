import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({
  title,
  color = "primary",
  textcolor = "white",
  onPress,
  disable,
  font,
  fontSize = 18,
}) {
  return (
    <TouchableOpacity
      onPress={disable ? console.log("disable") : onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text
        style={[
          styles.text,
          { color: textcolor },
          { fontFamily: font },
          { fontSize: fontSize },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  text: { color: "white" },
});

export default AppButton;
