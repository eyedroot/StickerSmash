import {SplashScreen, Stack} from "expo-router";
import {useEffect} from "react";
import {setStatusBarStyle} from "expo-status-bar";

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2500);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
