import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomButton = ({ onPress = () => {}, children, disabled }) => {
  return (
    <View style={[styles.buttonWrapper]}>
      <TouchableOpacity
        onPress={disabled ? null : onPress}
        activeOpacity={disabled ? 1 : 0.5}
      >
        <View
          style={[
            disabled
              ? {
                  ...styles.button,
                  backgroundColor: "#cccccc",
                }
              : styles.button,
          ]}
        >
          {children}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: { overflow: "hidden", borderRadius: 5 },
  button: {
    padding: 15,
    backgroundColor: "#F2F2F2",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default CustomButton;
