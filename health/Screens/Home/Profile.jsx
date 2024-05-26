import { Alert, ScrollView, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import useHeaderHeight from "../../hooks/getHeight";
import Text from "../../components/Text";
import colors from "../../components/pallets";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthenticatedUserContext } from "../../provider/authProvider";
import Icons from "../../assets/icons/Icons";
import { doc, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../firebase";

const Profile = ({ navigation }) => {
  const { insets } = useHeaderHeight();
  const { userData, user } = useContext(AuthenticatedUserContext);
  console.log(user, "data");

  const [formData, setFormData] = useState({
    age: "",
    emotionalStability: "",
    employmentStatus: "",
    financialWorry: "",
    incomeSatisfaction: "",
    healthServiceSatisfaction: "",
  });

  useEffect(() => {
    setFormData({
      age: userData.age || "",
      emotionalStability: userData.emotionalStability || "",
      employmentStatus: userData.employmentStatus || "",
      financialWorry: userData.financialWorry || "",
      incomeSatisfaction: userData.incomeSatisfaction || "",
      healthServiceSatisfaction: userData.healthServiceSatisfaction || "",
    });
  }, [userData]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const saveData = async (field, value) => {
    try {
      await updateDoc(doc(db, "users", user.uid), { [field]: value });
      alert("Profile Updated", "Your profile has been updated successfully.");
    } catch (error) {
      console.error("Error updating profile: ", error);
      alert("Error", "There was an error updating your profile.");
    }
  };
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
            editable={false}
            value={userData?.name}
            style={styles.textBox}
            placeholder="Name"
            label={"First Name"}
          />
          <Input
            editable={false}
            label={"Email"}
            value={user?.email}
            placeholder={"Email"}
            style={styles.textBox}
          />
          <Input
            editable={false}
            label={"Phone Number"}
            value={userData?.phone}
            placeholder={"Phone Number"}
            style={styles.textBox}
          />
          <Input
            label={"Age"}
            placeholder={"Age"}
            value={formData.age}
            onChangeText={(value) => handleChange("age", value)}
            onBlur={() => saveData("age", formData.age)}
            style={styles.textBox}
          />
          <Input
            value={formData.emotionalStability}
            onChangeText={(value) => handleChange("emotionalStability", value)}
            onBlur={() =>
              saveData("emotionalStability", formData.emotionalStability)
            }
            label={"Emotional Stability"}
            placeholder={"Emotionally Stable"}
            style={styles.textBox}
          />
          <Input
            value={formData.employmentStatus}
            onChangeText={(value) => handleChange("employmentStatus", value)}
            onBlur={() =>
              saveData("employmentStatus", formData.employmentStatus)
            }
            label={"What is your current employment Status?"}
            placeholder={"What is your current employment Status"}
            style={styles.textBox}
          />
          <Input
            value={formData.financialWorry}
            onChangeText={(value) => handleChange("financialWorry", value)}
            onBlur={() => saveData("financialWorry", formData.financialWorry)}
            label={
              "How often do you worry about meeting your financial obligations, such as rent, utility bills, or loan repayments?"
            }
            placeholder={
              "How often do you worry about meeting your financial obligations, such as rent, utility bills, or loan repayments?"
            }
            style={styles.textBox}
          />
          <Input
            value={formData.incomeSatisfaction}
            onChangeText={(value) => handleChange("incomeSatisfaction", value)}
            onBlur={() =>
              saveData("incomeSatisfaction", formData.incomeSatisfaction)
            }
            label={"How satisfied are you with your current level of income?"}
            placeholder={
              "How satisfied are you with your current level of income?"
            }
            style={styles.textBox}
          />
          <Input
            value={formData.healthServiceSatisfaction}
            onChangeText={(value) =>
              handleChange("healthServiceSatisfaction", value)
            }
            onBlur={() =>
              saveData(
                "healthServiceSatisfaction",
                formData.healthServiceSatisfaction
              )
            }
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
