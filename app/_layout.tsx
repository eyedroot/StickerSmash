import { MyProvider } from "@/contexts/MyContext";
import { SplashScreen, Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 200);

  return (
    <MyProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </MyProvider>
  );
}
