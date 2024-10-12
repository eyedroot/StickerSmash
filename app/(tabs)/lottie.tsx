import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Lottie() {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("@/assets/lotties/animation.json")}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
