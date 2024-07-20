import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { IconEyeSlash } from "@/assets/icons";
import { Colors } from "@/constants/Colors";
import { useRef, useState } from "react";

interface InputType {
  placeHolder: string;
  isPasswordInput?: boolean;
  Icon: React.ReactNode;
}

export const Input = ({ Icon, placeHolder, isPasswordInput }: InputType) => {
  const [hidePassword, setHidePassword] = useState(true);
  const textInputRef = useRef<TextInput>(null);
  const [value, setValue] = useState("");

  const stayFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const toggleHide = () => {
    stayFocus();
    setHidePassword((prev) => !prev);
  };

  return (
    <View style={styles.inputContainer}>
      <Pressable onPress={stayFocus} style={styles.iconContainer}>
        {Icon}
      </Pressable>

      {/* Placeholder Text */}
      {!value && (
        <Text onPress={stayFocus} style={styles.placeholder}>
          {placeHolder}
        </Text>
      )}

      <TextInput
        ref={textInputRef}
        style={styles.input}
        value={value}
        inputMode="text"
        secureTextEntry={isPasswordInput && hidePassword}
        onChangeText={setValue}
      />

      {isPasswordInput &&
        (hidePassword ? (
          <IconEyeSlash
            onPress={toggleHide}
            width={19.5}
            height={19.5}
            style={styles.postIcon}
          />
        ) : (
          <SimpleLineIcons
            onPress={toggleHide}
            name="eye"
            size={19}
            style={styles.postIcon}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 48,
    borderRadius: 16,
    marginBottom: 2,
    backgroundColor: "#fff",
    position: "relative",
    alignItems: "flex-end",
  },
  iconContainer: {
    position: "absolute",
    top: 15,
    left: 24,
  },
  placeholder: {
    position: "absolute",
    top: 15,
    left: 56,
    color: Colors.textColor1,
    zIndex: 1,
    fontFamily: "GothamPro",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
  },
  postIcon: {
    position: "absolute",
    top: 15,
    right: 16,
    zIndex: 1,
  },
  input: {
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    fontWeight: "400",
    fontSize: 16,
    width: "85%",
    height: "100%",
  },
});
