import { View, Text, StyleSheet } from "react-native";

export default function Shop() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Shop Tab</Text>
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
