import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";

export default function CustomSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isEnabled ? Colors.color2 : "#767577" },
      ]}
    >
      <Switch
        trackColor={{ false: "transparent", true: "transparent" }}
        thumbColor={isEnabled ? "#fff" : Colors.color2}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 20,
    borderRadius: 12,
    paddingHorizontal: 22,
    paddingVertical: 12,

    alignItems: "center",
    justifyContent: "center",
  },
});
