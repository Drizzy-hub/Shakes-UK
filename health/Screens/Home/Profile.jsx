import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import useHeaderHeight from "../../hooks/getHeight";
import Text from "../../components/Text";
import colors from "../../components/pallets";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthenticatedUserContext } from "../../provider/authProvider";

const Profile = () => {
  const { insets } = useHeaderHeight();
  const navigation = useNavigation();
  const { userData } = useContext(AuthenticatedUserContext);
  console.log(userData, "data");
  return (
    <View>
      <View style={{ height: insets.top }} />

      <View style={styles.container}>
        <Text style={{ color: colors.btn }} onPress={navigation.goBack()}>
          Back
        </Text>
        <Input style={styles.textBox} placeholder="Name" />
        <Input placeholder={"Email"} style={styles.textBox} />
        <Input placeholder={"Phone Number"} style={styles.textBox} />
        <Input placeholder={"Age"} style={styles.textBox} />
        <Input placeholder={"Emotionally Stable"} style={styles.textBox} />

        <View style={{ marginTop: 35 }}>
          <Text style={{ color: colors.btn }}>Log out</Text>
          <Text style={{ color: colors.red, marginTop: 10 }}>
            Delete Account
          </Text>
        </View>
        <View>
          <Button text={"Update"} />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});
