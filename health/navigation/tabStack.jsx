import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../Screens/Home/Home";
import Viewvideo from "../Screens/Home/Viewvideo";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabStack() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarIcon: ({ focused, size, color }) => {
        //   const name = getTabIcon(route, focused);

        //   return <Icon {...{ color, name, size }} />;
        // },
        // tabBarLabel: ({ color }) => {
        //   return (
        //     <Text
        //       style={{
        //         color: color,
        //         fontSize: 10,
        //         padding: Platform.OS === 'android' ? 10 : undefined,
        //       }}>
        //       {route.name}
        //     </Text>
        //   );
        // },
        // tabBarStyle: [Platform.OS === 'android' && { height: 60, padding: 10 }],
      })}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Viewvideo" component={Viewvideo} />
    </Navigator>
  );
}
