import { ScrollView, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import useHeaderHeight from "../../hooks/getHeight";
import Text from "../../components/Text";
import colors from "../../components/pallets";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthenticatedUserContext } from "../../provider/authProvider";
import Icons from "../../assets/icons/Icons";

const Profile = ({ navigation }) => {
  const { insets } = useHeaderHeight();
  const { userData, user } = useContext(AuthenticatedUserContext);
  console.log(userData, "data");
  return (
    <ScrollView>
      <View>
        <View style={{ height: insets.top }} />

        <View style={styles.container}>
          <Text
            style={{ color: colors.btn, marginTop: 10 }}
            onPress={() => navigation.goBack()}
          >
            Back
          </Text>
          <View
            style={{ alignItems: "center", marginBottom: 50, marginTop: 30 }}
          >
            <Icons size={58} name={"user"} />
          </View>
          <Input
            value={userData?.name}
            style={styles.textBox}
            placeholder="Name"
            label={"First Name"}
          />
          <Input
            label={"Email"}
            value={user?.email}
            placeholder={"Email"}
            style={styles.textBox}
          />
          <Input
            label={"Phone Number"}
            value={userData?.phone}
            placeholder={"Phone Number"}
            style={styles.textBox}
          />
          <Input label={"Age"} placeholder={"Age"} style={styles.textBox} />
          <Input
            label={"Emotional Stability"}
            placeholder={"Emotionally Stable"}
            style={styles.textBox}
          />
          <Input
            label={"What is your current employment Status?"}
            placeholder={"What is your current employment Status"}
            style={styles.textBox}
          />
          <Input
            label={
              "How often do you worry about meeting your financial obligations, such as rent, utility bills, or loan repayments?"
            }
            placeholder={
              "How often do you worry about meeting your financial obligations, such as rent, utility bills, or loan repayments?"
            }
            style={styles.textBox}
          />
          <Input
            label={"How satisfied are you with your current level of income?"}
            placeholder={
              "How satisfied are you with your current level of income?"
            }
            style={styles.textBox}
          />
          <Input
            label={"How satisfied are you with the health service"}
            placeholder={"How satisfied are you with the health service"}
            style={styles.textBox}
          />
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: colors.btn }}>Log out</Text>
            <Text style={{ color: colors.red, marginTop: 10 }}>
              Delete Account
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Button text={"Update"} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});
