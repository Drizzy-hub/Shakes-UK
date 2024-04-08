import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import HomeStack from "./homeStack";
import TabStack from "./tabStack";

const { Navigator, Screen, Group } = createStackNavigator();

export default function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Group
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      >
        <Screen name="TabStack" component={TabStack} />
        <Screen name="HomeStack" component={HomeStack} />
      </Group>
    </Navigator>
  );
}
