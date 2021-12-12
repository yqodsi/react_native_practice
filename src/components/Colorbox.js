import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, hexCode }) => {
  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text style={styles.text}>{colorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "white"
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
});

export default ColorBox;
