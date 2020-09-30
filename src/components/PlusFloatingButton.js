import React from "react";
import { StyleSheet, View, TouchableNativeFeedback } from "react-native";
import { pantalla } from "../constantes/Temas";

import AddIcon from "./Icons/AddIcon";
const { screenWidth } = pantalla;

const PlusFloatingButton = ({ onPress }) => {
  const customStyle = {
    height: screenWidth > 360 ? 60 : 40,
    width: screenWidth > 360 ? 60 : 40,
    borderRadius: screenWidth > 360 ? 30 : 20,
  };

  return (
    <View style={[styles.fab, { ...customStyle }]}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.fabImage}>
          <AddIcon height={15} width={15} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    right: 10,
    overflow: "hidden",
    backgroundColor: "#2E2E2D",
  },
  fabImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlusFloatingButton;
