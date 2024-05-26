import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
