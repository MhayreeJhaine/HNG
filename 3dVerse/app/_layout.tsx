import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import { useColorScheme } from "@/components/useColorScheme";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(main)",
};

// Prevent splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

ErrorUtils.setGlobalHandler((error) => {
  console.log("🔥 Uncaught Error:", error);
  // console.log("📌 Stack Trace:", error.stack);
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      try {
        SplashScreen.hideAsync();
      } catch (err) {}
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  try {
    return <RootLayoutNav />;
  } catch (err) {
    return null;
  }
}

function RootLayoutNav() {
  const colorScheme = useColorScheme() || "light";

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <StatusBar style="auto" />
        <Stack.Screen name="(main)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
}
