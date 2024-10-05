import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 45,
        borderRadius: 6,
        backgroundColor: "#81c784",
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 14.5,
    fontWeight: "bold",
    width: 250,
    textAlign: "center",
  },
});
