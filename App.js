import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const [save, setSave] = useState(true);
  const animation = useRef(null);
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      if (save) {
        animation.current.play(94, 94);
      } else {
        animation.current.play(7, 7);
      }

      firstRun.current = false;
    } else if (save) {
      animation.current.play(0, 250);
    } else {
      animation.current.play(0, 0);
    }
  }, [save]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSave(!save)}>
        <LottieView
          source={require("./src/assets/sun.json")}
          style={{ width: 300, height: 300 }}
          autoPlay={false}
          resizeMode="cover"
          ref={animation}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
