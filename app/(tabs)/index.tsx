import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex items-center justify-center">
        <Text className="mb-10 ">
          Open up App.js to start working on your app!
        </Text>
        <Text>nativewind test</Text>
      </View>
    </SafeAreaView>
  );
}
