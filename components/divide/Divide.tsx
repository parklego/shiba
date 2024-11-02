import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DivideProps {
  text?: string;
}

const Divide: React.FC<DivideProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      {text ? (
        <>
          <View style={[styles.line]} />
          <Text style={[styles.text]}>{text}</Text>
          <View style={[styles.line]} />
        </>
      ) : (
        <View style={[styles.fullLine]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 35,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "silver",
  },
  fullLine: {
    flex: 1,
    height: 1,
    backgroundColor: "silver",
  },
  text: {
    paddingHorizontal: 15,
    fontSize: 16,
    color: "silver",
  },
});

export default Divide;
