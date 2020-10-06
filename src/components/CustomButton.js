import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomButton = ({ onPress = () => {}, children }) => (
  <View style={styles.buttonWrapper}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>{children}</View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonWrapper: { overflow: "hidden", borderRadius: 10 },
  button: {
    padding: 20,
    backgroundColor: "#F2F2F2",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default CustomButton;
