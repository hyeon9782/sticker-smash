import { Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { RootSiblingParent } from "react-native-root-siblings";

// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);
export default function RootLayout() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setStatusBarStyle("light");
  //   }, 0);
  // }, []);'
  return (
    <RootSiblingParent>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </RootSiblingParent>
  );
}
