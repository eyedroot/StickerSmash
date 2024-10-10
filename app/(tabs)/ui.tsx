import {GestureHandlerRootView} from "react-native-gesture-handler";
import {ImageBackground, StyleSheet, Text} from "react-native";

export default function UI() {
  const image = {
    uri: "https://docs.expo.dev/static/images/tutorial/background-image.png",
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Elements</Text>
        <Text style={styles.text}>in Front of</Text>
        <Text style={styles.text}>Background</Text>
      </ImageBackground>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover', // scale up the image to fill the container, preserving aspect ratio
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  }
});