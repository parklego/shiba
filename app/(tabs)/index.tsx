import React from "react";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.navigateTitle}>반가워요! ooo님</Text>
          <Text style={styles.guideText}>온타임과 함께한지 1일째 입니다.</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    padding: 20,
    height: "100%",
  },

  navigateTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  guideText: {
    marginTop: 15,
    marginBottom: 40,
    fontSize: 16,
    color: "darkgray",
  },
});
