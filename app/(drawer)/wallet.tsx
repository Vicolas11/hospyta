import { View, Text, StyleSheet } from "react-native";

export default function Wallet() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Wallet Drawer</Text>
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
