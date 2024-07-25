import { moderateScale } from "@/utils/proportional.util";
import { View, Text, StyleSheet } from "react-native";
import { iconLabel } from "@/data/main.data";
import { Colors } from "@/constants/Colors";
import { ITabIcon } from "@/interfaces";

export default function TabBarIcon({ route, focused }: ITabIcon) {
  const { Icon, label } = iconLabel(route);

  return (
    <View
      style={[
        styles.tab,
        { backgroundColor: focused ? Colors.activeTabColor : "transparent" },
      ]}
    >
      {Icon}
      {focused && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: 48,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontFamily: "Nunito",
    fontSize: moderateScale(14),
    fontWeight: "700",
    lineHeight: 19.1,
    textAlign: "left",
    color: Colors.primaryColor,
    marginLeft: 5
  },
});
