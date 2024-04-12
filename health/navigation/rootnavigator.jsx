import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";

import { AuthenticatedUserContext } from "../provider/authProvider";
import AuthStack from "./authStack";
import HomeStack from "./homeStack";
import { auth, db } from "../firebase";
import { getDoc, doc } from "@firebase/firestore";
import AppNavigator from "./appNavigator";

const linking = {
  config: {
    initialRouteName: "Login",
    screens: {},
  },
};

export default function RootNavigator() {
  const { user, setUser, setUserName, setUserData, userData, userName } =
    useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setUser(authenticatedUser)
            : setUser(null));
          setIsLoading(false);
          if (authenticatedUser) {
            const userData = await getDoc(
              doc(db, "users", authenticatedUser.uid)
            );
            if (userData.exists()) {
              console.log(userData.data(), "names");
              setUserData(userData.data());
              setUserName(userData.data()?.name);
            } else {
              alert("User invalid");
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      {user ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
