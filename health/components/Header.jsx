import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import Text from "./Text";
import { AuthenticatedUserContext } from "../provider/authProvider";
import Icons from "../assets/icons/Icons";
import colors from "./pallets";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const { userName } = useContext(AuthenticatedUserContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: colors.inPut }}>Hello,</Text>
        <Text fontWeight="700">Hi {userName}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("HomeStack", { screen: "Profile" })
          }
        >
          <Icons size={58} name={"user"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
  },
});
