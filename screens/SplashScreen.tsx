import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";

export default function SplashScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.splashContainer}>
        <Image
          source={require("../assets/images/splash_1.png")}
          style={styles.splashImage}
        />
      </View>
      <Text style={styles.text}>Consult...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashContainer: {
    width: 269.69,
    height: 269.69,
  },
  splashImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    fontFamily: "GothamPro",
    color: Colors.textColor,
    fontSize: 18
  },
});
