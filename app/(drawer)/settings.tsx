import { View, Text, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Settings Drawer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
