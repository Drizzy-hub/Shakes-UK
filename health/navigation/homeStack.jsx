import React from "react";
import Profile from "../Screens/Home/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Group, Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group>
        {/* <Screen name="Home" component={Home} /> */}
        <Screen name="Profile" component={Profile} />
      </Group>
    </Navigator>
  );
}
