import React from "react";

import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  password?: boolean;
}

const Input = ({ password, ...props }: InputProps) => {
  return (
    <TextInput
      style={styles.container}
      secureTextEntry={password}
      placeholderTextColor="gray"
      {...props}
    ></TextInput>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    padding: 5,
    borderBottomWidth: 1,
    borderRadius: 5,
    // borderWidth: 1,
    fontSize: 14,
  },
});
