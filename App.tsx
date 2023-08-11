import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Home } from "./src/screens/Home";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}
