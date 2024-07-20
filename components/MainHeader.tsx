import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { IconBell, IconMenu } from "@/assets/icons";
import { Colors } from "@/constants/Colors";

export default function MainHeader() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContent}>
        <View style={styles.profileImgContainer}>
          <Image
            style={styles.img}
            source={require("../assets/images/profile.jpeg")}
          />
        </View>
        <View>
          <Text style={styles.title}>Welcome Dr,</Text>
          <Text style={styles.subTitle}>What do you want to do today?</Text>
        </View>
      </View>
      <View style={styles.iconContent}>
        <View style={styles.iconContainer}>
          <IconBell width={15.17} height={19.5} />
        </View>
        <TouchableOpacity onPress={openDrawer} style={styles.iconContainer}>
          <IconMenu width={14} height={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    width: 322,
    maxWidth: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 40,
  },
  welcomeContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContent: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 7,
  },
  profileImgContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 10,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontFamily: "Axiforma",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 29.36,
    textAlign: "left",
  },
  subTitle: {
    fontFamily: "GothamPro",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 9.57,
    textAlign: "left",
    maxWidth: "auto",
    marginTop: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.textColor5,
    alignItems: "center",
    justifyContent: "center",
  },
});
