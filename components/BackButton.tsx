import { proportionHeight, proportionWidth } from "@/utils/proportional.util";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View, Pressable, StyleSheet } from "react-native";
import { IconArrowLeft } from "@/assets/icons";
import { router } from "expo-router";

export default function BackButton() {
  return (
    <View style={styles.iconContainer}>
      <Pressable
        onPress={() => router.replace("/")}
        android_ripple={{ color: Colors.btnColorTint1 }}
        style={({ pressed }) => [
          pressed && styles.onPress,
          styles.iconInnerContainer,
        ]}
      >
        <IconArrowLeft width={15} height={15} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  onPress: {
    opacity: 0.5,
  },
  iconInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: 15,
    left: 24,
    zIndex: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 8,
    position: "absolute",
    top: proportionHeight(64),
    left: proportionWidth(24),
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#2B2B221A",
  },
});
