import Checkbox from "@/components/Checkbox";
import { useMyContext } from "@/contexts/MyContext";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function UI() {
  const [checked, setChecked] = useState(false);
  const { value, componentCount, setComponentCount } = useMyContext();

  useEffect(() => {
    setComponentCount((prevState) => prevState + 1);
  }, [setComponentCount]);

  const image: { uri: string } = {
    uri: "https://docs.expo.dev/static/images/tutorial/background-image.png",
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Elements</Text>
        <Text style={styles.text}>in Front of</Text>
        <Text style={styles.text}>Background</Text>

        <View style={styles.checkboxContainer}>
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            buttonStyle={styles.checkboxBase}
            activeButtonStyle={styles.checkboxChecked}
          />
          <Text style={styles.checkboxLabel}>{`⁌ Click!`}</Text>
          <Text style={styles.checkboxLabel}>{`⁌ ${value}`}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>
            Component Count: ${componentCount}
          </Text>
        </View>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover", // scale up the image to fill the container, preserving aspect ratio
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  checkboxContainer: {
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 18,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "coral",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "coral",
  },
});
