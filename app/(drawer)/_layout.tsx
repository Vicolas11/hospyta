import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { drawIconData } from "@/data/drawer.data";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { Colors } from "@/constants/Colors";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerPosition: "right",
          swipeEnabled: false,
          headerShown: false,
          drawerActiveBackgroundColor: Colors.primaryColorLight,
          drawerActiveTintColor: Colors.drawerActiveTintColor,
          drawerInactiveTintColor: Colors.drawerInActiveTintColor,
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 15,
          },
          drawerStyle: { backgroundColor: Colors.drawerBgColor },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        {drawIconData.map(({ drawerIcon, title, name }, index) => (
          <Drawer.Screen
            key={index}
            name={name}
            options={{
              title,
              drawerIcon,
            }}
          />
        ))}
      </Drawer>
    </GestureHandlerRootView>
  );
}
