import { View, Text, StyleSheet } from "react-native";

export default function People() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>People Tab</Text>
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
