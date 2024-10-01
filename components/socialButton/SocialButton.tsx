import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface SocialButtonProps {
  type: string;
  icon?: any;
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const checkBrand = (brand: string) => {
  switch (brand) {
    case "common":
      return "#67e574";
    case "kakao":
      return "#FEE500";
    case "google":
      return "#ffffff";
    default:
      return "#7ee0f4";
  }
};

const SocialButton = ({
  type,
  icon,
  title,
  onPress,
  disabled,
}: SocialButtonProps) => {
  return (
    <Pressable
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: checkBrand(type),
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
