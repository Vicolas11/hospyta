import CustomButton from "@/components/CustomButton";
import BackButton from "@/components/BackButton";
import { formData } from "@/data/register.data";
import { Colors } from "@/constants/Colors";
import { IconGoogle } from "@/assets/icons";
import { Input } from "@/components/Input";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";

export default function RegisterScreen() {
  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <BackButton />

        <View>
          <Text style={styles.txtRegister}>Register Account</Text>
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
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? Colors.primaryColor : undefined}
          />
          <Text style={styles.txtAccept}>
            I accept all the{" "}
            <Text style={styles.txtTerms}>Terms & Conditions</Text>
          </Text>
        </View>

        <CustomButton
          title="Register"
          onPress={() => router.replace("login")}
        />

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
              <Text style={styles.googleText}>Sign Up with Google</Text>
            </View>
          }
          onPress={() => {}}
        />

        <Text style={styles.txtAlready}>
          Already have account?{" "}
          <Text
            onPress={() => router.replace("login")}
            style={styles.txtSignin}
          >
            Sign in
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
  form: {
    rowGap: 13,
    marginHorizontal: 2,
  },
  checkbox: {
    margin: 8,
    width: 16,
    height: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtRegister: {
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
  googleBtn: {
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  google: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
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
  termsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  txtAccept: {
    fontFamily: "GothamPro",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16.44,
    textAlign: "left",
    color: Colors.textColor3,
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
  txtSignin: {
    color: Colors.primaryColor,
  },
});
