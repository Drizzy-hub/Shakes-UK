import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/Input";
import colors from "../../components/pallets";
import Text from "../../components/Text";
import useHeaderHeight from "../../hooks/getHeight";
import { signInWithEmailAndPassword } from "firebase/auth";
import Icons, { IconName } from "../../assets/icons/Icons.jsx";
import { auth } from "../../firebase";

const Login = ({ navigation }) => {
  const { insets } = useHeaderHeight();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await signInWithEmailAndPassword(auth, email, password).then(
          navigation.navigate(("TabStack", { screen: "Home" }))
        );
      }
    } catch (error) {
      console.log(error);
      setLoginError(error.message);
    }
  };
  return (
    <KeyboardAvoidingView>
      <View>
        <View style={{ height: insets.top }} />
        <View style={styles.container}>
          <Text
            style={{ marginTop: 46, marginBottom: 151 }}
            fontWeight="700"
            children={"Login"}
          />
          <Input
            style={styles.textBox}
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Email"
          />

          <Input
            placeholder={"Password"}
            value={password}
            onChangeText={(value) => setPassword(value)}
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
              disabled={email == "" && password == ""}
              onPress={onLogin}
              text="Login"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 17,
            }}
          >
            <Text fontSize={12} fontWeight="700">
              Already have an account?
            </Text>
            <Text
              onPress={() => {
                navigation.navigate("Signup");
              }}
              fontSize={12}
              style={{ color: colors.btn, marginLeft: 4 }}
            >
              SignUp
            </Text>
          </View>
          <View style={{ display: "flex", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderWidth: 1,
                borderColor: colors.borderG,
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderRadius: 100,
                marginTop: 17,
                marginHorizontal: "20%",
                flexDirection: "row",
                alignItems: "center",
              }}
              // onPress={navigation.navigate('Signup')}
            >
              <Icons size={18} name={"google"} />
              <Text
                fontSize={14}
                fontWeight="500"
                style={{ marginLeft: 10, lineHeight: 16 }}
              >
                Sign in with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});
