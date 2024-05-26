import React, { useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "./pallets";
import Text from "./Text";

const Input = ({
  RightComponent,
  LeftComponent,
  editable = true,
  error,
  coverStyle,
  inputStyle,
  style,
  secureTextEntry,
  label,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(!secureTextEntry);
  const toggleSetShowPassword = () => setShowPassword((prev) => !prev);
  return (
    <View style={[styles.container, coverStyle]}>
      {label && <Text style={{ marginBottom: 5 }}>{label}</Text>}
      <View
        style={[
          styles.content,
          !!error && { borderColor: colors.red },
          !!LeftComponent && { paddingLeft: 10 },
          (!!RightComponent || secureTextEntry) && { paddingRight: 10 },
          !editable && { backgroundColor: colors.black },
          style,
        ]}
      >
        <TextInput
          style={[styles.input, inputStyle]}
          placeholderTextColor={colors.inPut}
          secureTextEntry={!showPassword}
          editable={editable}
          {...props}
        />
        {secureTextEntry ? (
          <TouchableOpacity onPress={toggleSetShowPassword}>
            {/* <Icon
            name={!showPassword ? 'visibility' : 'visibility-off'}
            size={18}
            color={pallets.secondaryTextColor}
          /> */}
          </TouchableOpacity>
        ) : (
          RightComponent && RightComponent
        )}
      </View>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  container: {
    marginBottom: 17,
  },
  content: {
    alignItems: "center",
    borderColor: colors.textBox,
    backgroundColor: colors.textBox,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    height: 55,
    paddingHorizontal: 16,
    justifyContent: "center",
    width: "100%",
  },
  // error: {
  //   alignSelf: 'center',
  //   backgroundColor: pallets.lightRed,
  //   paddingHorizontal: 10,
  //   paddingVertical: 7,
  //   width: '95%',
  // },
  // errorText: {
  //   color: pallets.red,
  // },
  input: {
    color: colors.inPut,
    flex: 1,
    fontFamily: "Poppins",
    fontWeight: "400",
    // paddingHorizontal: 16,
  },
  // labelText: {
  //   marginBottom: 5,
  // },
});
