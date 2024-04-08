import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState, useContext } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Container from "../../components/Container";
import Input from "../../components/Input";
import Text from "../../components/Text";
import { auth, db } from "../../firebase";
// import { auth, createUserWithEmailAndPassword } from '../../firebase';

import useHeaderHeight from "../../hooks/getHeight";
import { collection, setDoc, doc } from "@firebase/firestore";
import { AuthenticatedUserContext } from "../../provider/authProvider";

const Signup = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const navigation = useNavigation();
  const { insets } = useHeaderHeight();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const handleSignup = async () => {
    console.log(email);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name: name,
        phone: phone,
      }).then(() => {
        signInWithEmailAndPassword(auth, email, password).then(
          async (userCredential) => {
            const user = userCredential.user;
            setUser(user);
            navigation.navigate("Home");
          }
        );
        console.log("User registered successfully");
      });
    } catch (error) {
      console.log("Error signing up user:", error);
    }
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <View style={{ height: insets.top }} />
          <View style={styles.container}>
            <Text
              style={{ marginTop: 46, marginBottom: 151 }}
              fontWeight="700"
              children={"SignUp"}
            />
            <Input
              style={styles.textBox}
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholder="Email"
            />
            <Input
              value={name}
              onChangeText={(value) => setName(value)}
              placeholder={"Name"}
              style={styles.textBox}
            />
            <Input
              value={phone}
              onChangeText={(value) => setPhone(value)}
              placeholder={"Phone Number"}
              style={styles.textBox}
            />
            <Input
              value={password}
              placeholder={"Password"}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry
              style={styles.textBox}
            />
            <Input
              value={confirmpassword}
              error={password !== confirmpassword}
              placeholder={"Confirm Password"}
              onChangeText={(value) => setconfirmPassword(value)}
              secureTextEntry
              style={styles.textBox}
            />
            <View
              style={{
                alignItems: "center",
                paddingHorizontal: "30%",
                marginTop: 30,
              }}
            >
              <Button
                onPress={handleSignup}
                disabled={password !== confirmpassword}
                text="SignUp"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});
