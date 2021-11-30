import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { MotiView, MotiText } from "moti";

export default function App() {
  const animation = useRef(null);

  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "timing", duration: 5000 }}
      style={styles.container}
    >
      <MotiText
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "timing", duration: 5000, delay: 2000 }}
        style={{ fontSize: 40, marginBottom: 20, fontWeight: "bold" }}
      >
        Lucas Lima
      </MotiText>
      <LottieView
        source={require("./src/assets/walking.json")}
        style={{ width: 300, height: 300 }}
        resizeMode="cover"
        ref={animation}
        autoPlay={true}
      />
      {/* <TouchableOpacity
        style={{
          width: "90%",
          height: 100,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          animation.current.play();
          setTimeout(() => {
            animation.current.reset();
          }, 10000);
        }}
      >
        <MotiText
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 5000, delay: 2000 }}
          style={{ fontSize: 40, marginBottom: 20, fontWeight: "bold" }}
          style={{ fontSize: 32 }}
        >
          Load
        </MotiText>
      </TouchableOpacity> */}
    </MotiView>
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
