import CustomButton from "@/components/CustomButton";
import BackButton from "@/components/BackButton";
import { formData } from "@/data/login.data";
import { Colors } from "@/constants/Colors";
import { IconGoogle } from "@/assets/icons";
import { Input } from "@/components/Input";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <BackButton />

        <View style={styles.mainSection}>
          <View>
            <Text style={styles.txtHello}>Hello Dr!</Text>
            <Text style={styles.txtFill}>
              Fill your details or continue with social media
            </Text>
          </View>

          <View style={styles.form}>
            {formData.map((d, idx) => (
              <Input
                key={idx}
                Icon={d.Icon}
                placeHolder={d.placeHolder}
                isPasswordInput={d.show}
              />
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.txtForgot}>Forgot password ?</Text>
          </View>

          <CustomButton title="Sign In" onPress={() => router.replace("(drawer)")} />

          <View style={styles.orSignContainer}>
            <View style={styles.line}></View>
            <Text style={styles.txtOrSign}>Or sign in with</Text>
            <View style={styles.line}></View>
          </View>

          <CustomButton
            xtraStyle={styles.googleBtn}
            title={
              <View style={styles.google}>
                <IconGoogle width={24} height={24} />
                <Text style={styles.googleText}>Sign In with Google</Text>
              </View>
            }
            onPress={() => {}}
          />
        </View>

        <Text style={styles.txtAlready}>
          Don’t have account?{" "}
          <Text
            onPress={() => router.replace("register")}
            style={styles.txtRegister}
          >
            Register
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Colors.bgColor,
    position: "relative",
    justifyContent: "flex-end",
  },
  mainSection: {
    flex: 1,
    justifyContent: "center",
  },
  txtHello: {
    marginBottom: 16,
    fontFamily: "Axiforma",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.textColor1,
  },
  txtFill: {
    fontFamily: "GothamPro",
    width: "70%",
    marginHorizontal: "auto",
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "center",
    color: Colors.textColor3,
  },
  form: {
    rowGap: 13,
    marginHorizontal: 2,
  },
  section: {
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  txtForgot: {
    fontFamily: "GothamPro",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "right",
    color: Colors.textColor1,
  },
  googleBtn: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    marginBottom: 50,
  },
  google: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    columnGap: 10,
  },
  googleText: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    color: Colors.textColor2,
  },
  txtAlready: {
    fontFamily: "GothamPro",
    fontSize: 16,
    marginTop: 12,
    fontWeight: "400",
    textAlign: "center",
    color: Colors.textColor2,
  },
  txtTerms: {
    color: Colors.textColor1,
  },
  orSignContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 3,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.lineColor,
  },
  txtOrSign: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 8,
    color: Colors.textColor3,
  },
  txtRegister: {
    color: Colors.primaryColor,
  },
});
