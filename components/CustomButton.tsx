import { moderateScale } from "@/utils/proportional.util";
import React, { useState, useRef } from "react";
import { ICustomButton } from "@/interfaces";
import { Colors } from "@/constants/Colors";
import {
  Text,
  StyleSheet,
  Animated,
  Easing,
  Pressable,
  Platform,
} from "react-native";

export default function CustomButton({
  title,
  onPress,
  isOutline = false,
  xtraStyle,
}: ICustomButton) {
  const [isClicked, setIsClicked] = useState(false);
  const animatedValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    setIsClicked(!isClicked);

    Animated.timing(animatedValue, {
      toValue: isClicked ? 1 : 0.5,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    onPress();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: isOutline ? "transparent" : Colors.primaryColor },
        { borderColor: isOutline ? "#fff" : Colors.primaryColor, borderWidth: isOutline ? 1 : 0 },
        xtraStyle,
      ]}
    >
      <Pressable
        style={({ pressed }) => [pressed && styles.onPress, styles.button]}
        onPress={handlePress}
        android_ripple={{
          color: isOutline ? Colors.btnColorTint1 : Colors.btnColorTint,
        }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 8,
    marginTop: 15,
    height: 48,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  onPress: {
    opacity: 0.5,
  },
  animateView: {
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "400",
    fontFamily: "GothamPro",
    fontSize: moderateScale(14),
    textAlign: "center",
  },
});
