import * as MainSplashScreen from "expo-splash-screen";
import SplashScreen from "@/screens/SplashScreen";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
MainSplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Axiforma: require("../assets/fonts/Axiforma-Regular.ttf"),
    GothamPro: require("../assets/fonts/GothamPro.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Gilroy: require("../assets/fonts/Gilroy-Regular.ttf"),
    Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
      MainSplashScreen.hideAsync();
    }, 3000);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      MainSplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="register" />
          <Stack.Screen name="login" />
          <Stack.Screen name="(drawer)" />
        </Stack>
      )}
    </>
  );
}
