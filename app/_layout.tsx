import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, Slot, Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();

      // Todo : auth check
      if (isAuthenticated) {
        router.replace("/(tabs)");
      }
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="findEmail" options={{ headerShown: false }} />
        <Stack.Screen name="findPassword" options={{ headerShown: false }} />
        <Stack.Screen
          name="signUp"
          options={{
            headerShown: true,
            title: "회원가입",
            presentation: "card",
            headerLeft: () => (
              <Pressable onPress={() => router.replace("/")}>
                <Ionicons name="arrow-back" size={24} color="black" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
