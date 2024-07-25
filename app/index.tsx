import { moderateScale, proportionHeight, proportionWidth } from "@/utils/proportional.util";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";
import PagerView from "react-native-pager-view";
import { slides } from "@/data/onboarding.data";
import { router } from "expo-router";

const OnboardingScreen = () => {
  return (
    <View style={styles.flex}>
      <PagerView style={styles.container} initialPage={0}>
        {slides.map((d, idx) => (
          <ImageBackground
            key={`${idx}`}
            resizeMode="cover"
            source={d.image}
            style={styles.flex}
          >
            <StatusBar style={d.statusBarStyle as StatusBarStyle} />
            <LinearGradient
              colors={d.colors}
              style={[styles.flex, { padding: 20 }]}
            >
              <Image
                source={require("../assets/images/logo_text.png")}
                style={styles.logo}
              />
              <Text style={styles.title}>{d.text}</Text>
              <Text style={styles.with}>With Hospyta</Text>
              <CustomButton
                title="Sign in"
                onPress={() => router.replace("login")}
              />
              <CustomButton
                isOutline
                title="Sign up"
                onPress={() => router.replace("register")}
              />
            </LinearGradient>
          </ImageBackground>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    position: "absolute",
    top: proportionHeight(50),
    left: proportionWidth(12),
    width: 149.34,
    height: 46.59,
    borderWidth: 2,
  },
  title: {
    fontSize: moderateScale(27),
    fontFamily: "Poppins",
    lineHeight: 40.5,
    fontWeight: "500",
    textAlign: "left",
    marginTop: proportionHeight(365),
    marginBottom: 10,
    color: "#ffffff",
  },
  with: {
    fontSize: moderateScale(16),
    fontFamily: "GothamPro",
    fontWeight: "400",
    textAlign: "left",
    color: "#E32654",
    marginBottom: 30,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#4425F5",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "400",
    fontFamily: "GothamPro",
    fontSize: moderateScale(14),
  },
  signUpButton: {
    width: "100%",
    padding: 15,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "#fff",
    fontWeight: "400",
    fontFamily: "GothamPro",
    fontSize: moderateScale(14),
  },
});

export default OnboardingScreen;
