import React, { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home/Home";
import AppNavigator from "./navigation/homeStack";
import AuthStack from "./navigation/authStack";
import Login from "./Screens/Auth/Login";
import Signup from "./Screens/Auth/Signup";
import RootNavigator from "./navigation/rootnavigator";
import Routes from "./navigation";

const fonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
  "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
};

const Stack = createNativeStackNavigator();
export default function App() {
  //  const { token } = useContext(AuthContext) as AuthContextType;
  const token = false;
  const [fontsLoaded] = useFonts(fonts);
  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 800);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Routes />
      <StatusBar style={"dark"} backgroundColor="transparent" translucent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
