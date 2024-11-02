import React from "react";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AnalysisScreen() {
  return (
    <SafeAreaView>
      <SafeAreaView>
        <View className="flex items-center justify-center">
          <Text className="mb-10 ">this is AnalysisScreen</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
