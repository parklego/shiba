import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

type SocialType = "kakao" | "google" | "naver";

interface SocialButtonProps {
  type: SocialType;
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const socialConfig = {
  kakao: {
    backgroundColor: "#FEE500",
    color: "#000000",
    icon: require("@/assets/images/social/kakao.png"),
  },
  naver: {
    backgroundColor: "#03c75a",
    color: "#ffffff",
    icon: require("@/assets/images/social/naver.png"),
  },
  google: {
    backgroundColor: "#ffffff",
    color: "#000000",
    icon: require("@/assets/images/social/google.png"),
  },
};

const SocialButton = ({ type, title, onPress }: SocialButtonProps) => {
  const { color, icon, backgroundColor } = socialConfig[type];

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          borderWidth: type === "google" ? 1 : 0,
          borderColor: type === "google" ? "silver" : "",
        },
      ]}
      onPress={onPress}
    >
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </Pressable>
  );
};
export default SocialButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    height: 45,
    borderRadius: 6,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 15,
    resizeMode: "contain",
  },
  text: {
    fontSize: 14.5,
    fontWeight: "bold",
    width: 250,
    textAlign: "center",
  },
});
