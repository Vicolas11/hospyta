import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";

export default function SubHeading({ title }: { title: string }) {
  return (
    <View style={styles.header}>
      <Text style={styles.txtTitle}>{title}</Text>
      <Text style={styles.txtViewAll}>View All</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
    marginBottom: 15
  },
  txtTitle: {
    fontFamily: "Axiforma",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "left",
    color: Colors.color4,
  },
  txtViewAll: {
    fontFamily: "GothamPro",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "right",
    color: Colors.color3,
  },
});
