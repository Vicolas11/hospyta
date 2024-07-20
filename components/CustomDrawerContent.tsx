import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { proportionHeight, proportionWidth } from "@/utils/proportional.util";
import { IconWallet } from "@/assets/icons";
import { drawerItemListIcon } from "@/data/drawer.data";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/profile.jpeg")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.welcomeText}>Welcome Dr,</Text>
          <Text style={styles.subText}>What do you want today?</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={23} color={Colors.textColor} />
        </TouchableOpacity>
      </View>
      <View style={styles.drawerList}>
        {props.state.routes.map((route, index) => {
          // Skip the screen with name "(tabs)"
          if (route.name !== "(tabs)") {
            const descriptor = props.descriptors[route.key];
            return (
              <TouchableOpacity
                key={index}
                onPress={() => props.navigation.navigate(route.name)}
              >
                <View style={styles.drawerItem}>
                  {drawerItemListIcon(route.name)}
                  <Text style={styles.drawerItemText}>
                    {descriptor.options.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }
          return null; // Don't render the "(tabs)" screen
        })}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.primaryColor,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    height: 121,
    marginTop: -40,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 10,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Axiforma",
    fontWeight: "600",
    lineHeight: 29.36,
    textAlign: "left",
  },
  subText: {
    color: "#fff",
    opacity: 0.9,
    fontSize: 10,
    fontFamily: "GothamPro",
    lineHeight: 11.72,
  },
  closeButton: {
    marginLeft: "auto",
    position: "absolute",
    top: proportionHeight(35),
    right: proportionWidth(20),
    zIndex: 1,
  },
  drawerList: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 50,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    height: 46,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  drawerItemText: {
    color: "#000",
    fontFamily: "Axiforma",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 25.34,
    textAlign: "left",
  },
});
