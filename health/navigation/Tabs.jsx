import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { Platform } from "react-native";
import Viewvideo from "../Screens/Home/Viewvideo";
import Home from "../Screens/Home/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabNavigator() {
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
      <Screen name="ViewVideo" component={Viewvideo} />
    </Navigator>
  );
}

// export const getTabIcon = (
//   // route: RouteProp<TabRoutes, keyof TabRoutes>,
//   // focused: boolean,
// ) => {
//   switch (route.name) {
//     case 'Home':
//       return focused ? 'home' : 'home-outline';
//     case 'Products':
//       return focused ? 'inventory' : 'inventory-outline';
//     case 'Sell':
//       return focused ? 'cart' : 'cart-outline';
//     case 'Terminal':
//       return focused ? 'terminal' : 'terminal-outline';
//     case 'More':
//       return focused ? 'more' : 'more-outline';
//     default:
//       return 'home';
//   }
// };
