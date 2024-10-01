import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    margin: 30,
  },
});
