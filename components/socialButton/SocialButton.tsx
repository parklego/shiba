import { checkBrand } from "@/utils";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface SocialButtonProps {
  type: string;
  icon?: any;
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const SocialButton = ({ type, icon, title, onPress }: SocialButtonProps) => {
  return (
    <Pressable
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: checkBrand(type),
        borderWidth: 1,
        borderRadius: 20,
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontWeight: "bold",
  },
});
