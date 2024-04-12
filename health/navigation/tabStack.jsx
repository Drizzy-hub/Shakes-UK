import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform } from "react-native";
import Icons from "../assets/icons/Icons";
import Text from "../components/Text";
import Home from "../Screens/Home/Home";
import Viewvideo from "../Screens/Home/Viewvideo";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabStack() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          const name = getTabIcon(route, focused);
          return <Icons {...{ color, name, size }} />;
        },
        tabBarLabel: ({ color }) => {
          return (
            <></>
            // <    <Text
            //          style={{
            //            color: color,
            //            fontSize: 10,
            //            padding: Platform.OS === "android" ? 10 : undefined,
            //          }}
            //        >
            //          {route.name}
            //        </Text>>
          );
        },
        tabBarStyle: [Platform.OS === "android" && { height: 60, padding: 10 }],
      })}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Viewvideo" component={Viewvideo} />
    </Navigator>
  );
}
export const getTabIcon = (route, focused) => {
  switch (route.name) {
    case "Home":
      return focused ? "home" : "homeOutline";
    case "Viewvideo":
      return focused ? "video" : "videoOutline";
    default:
      return "home";
  }
};
