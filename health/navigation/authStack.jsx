import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "../Screens/Auth/Login";
import Signup from "../Screens/Auth/Signup";

const { Group, Navigator, Screen } = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group>
        <Screen name="Login" component={Login} />
        <Screen name="Signup" component={Signup} />
      </Group>
    </Navigator>
  );
}
