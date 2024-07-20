import { View, Text, StyleSheet } from "react-native";

export default function TrackOrder() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Track Order Drawer</Text>
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
