
# Project Documentation: React Native Expo Implementation

## Overview

This document outlines the approach taken to solve various tasks using React Native and Expo. It includes the design and implementation of a drawer layout, login and register screens, and the handling of specific challenges and bugs encountered during the development process.

## Task 1: Design and Implement the Drawer Layout

### Steps Taken

1. **Setup Expo Drawer Navigation:**
   - Installed necessary packages:
     ```bash
     npm install @react-navigation/native @react-navigation/drawer react-native-gesture-handler
     ```
   - Configured the navigation container and drawer navigator in `App.js`.

2. **Custom Drawer Content:**
   - Created a `CustomDrawerContent` component to customize the drawer content.
   - Added user profile and drawer items with icons and labels.
   - Used styles to match the design as closely as possible.

3. **Gesture Handler:**
   - Wrapped the drawer navigator with `GestureHandlerRootView` to handle gestures smoothly.

4. **Open and Close Drawer on Button Click:**
   - Used `useNavigation` hook from `@react-navigation/native` to control drawer opening and closing.

### Example Code

```javascript
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
```

## Task 2: Design Login and Register Screens

### Steps Taken

1. **Initial Setup:**
   - Created `LoginScreen` and `RegisterScreen` components.
   - Used `TextInput` for input fields and `TouchableOpacity` for buttons.

2. **Handling SVG Files:**
   - Configured `metro.config.js` to handle local SVG files using `react-native-svg-transformer`.

### Example `metro.config.js`

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
};

module.exports = config;
```

3. **Styling and Layout:**
   - Used `StyleSheet` to create styles for input fields, buttons, and other UI elements.
   - Implemented responsive design to ensure proper layout across different screen sizes.
   - Used `LinearGradient` for gradient buttons.

4. **Focus Handling for TextInput:**
   - Added focus handling to activate `TextInput` on icon or placeholder click.

### Example Code

```javascript
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const firstNameRef = useRef(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => firstNameRef.current.focus()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Register Account</Text>
      <Text style={styles.subHeader}>Fill your details or continue with social media</Text>
      
      <View style={styles.inputContainer}>
        <MaterialIcons name="person-outline" size={24} color="gray" />
        <TextInput ref={firstNameRef} placeholder="First name" style={styles.input} />
      </View>

      {/* Other input fields and buttons */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 20, paddingTop: 40 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subHeader: { fontSize: 14, textAlign: 'center', marginBottom: 20, color: 'gray' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', paddingHorizontal: 10, paddingVertical: 15, borderRadius: 10, marginBottom: 15 },
  input: { flex: 1, marginLeft: 10 },
});
```

## Task 3: Handle Challenges and Bugs

### Challenges Faced and Solutions

1. **Handling SVG Files:**
   - **Challenge:** Unable to render local SVG files.
   - **Solution:** Configured `metro.config.js` with `react-native-svg-transformer`.

2. **Responsive Design:**
   - **Challenge:** Ensuring the design is responsive and looks good on different screen sizes.
   - **Solution:** Used flexbox properties and percentages for sizes, tested on multiple devices.

3. **Drawer Navigation:**
   - **Challenge:** Customizing the drawer and managing its state.
   - **Solution:** Created a custom drawer component, used `useNavigation` for opening/closing drawer programmatically.

### Example Code for SVG Handling

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
};

module.exports = config;
```

## Summary

By following the steps outlined above, I was able to design and implement the required screens and drawer navigation for the app using React Native and Expo. The main challenge was handling local SVG files, which was resolved by configuring the `metro.config.js` file. Additionally, ensuring responsive design and smooth navigation were key focus areas, which were addressed through careful styling and use of navigation hooks. The final implementation closely matches the provided design mockups and offers a user-friendly experience.
