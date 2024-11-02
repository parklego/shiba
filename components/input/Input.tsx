import React, { ReactNode } from "react";

import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  password?: boolean;
  innerComponent?: ReactNode;
}

const Input = ({ password, innerComponent, ...props }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={password}
        placeholderTextColor="gray"
        {...props}
      ></TextInput>

      {innerComponent}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    padding: 5,
    borderBottomWidth: 1,
    borderRadius: 5,
    // borderWidth: 1,
    fontSize: 16,
  },
});
