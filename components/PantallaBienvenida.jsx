import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

const PantallaBienvenida = (props) => {
  const slides = [
    {
      key: "1",
      text: "Regístrate para comprar tu tanque de gas",
      image: require("../assets/img/welcome-1.png"),
    },
    {
      key: "2",
      text: "Tu cilindro de gas a un solo click de distancia",
      image: require("../assets/img/welcome-2.png"),
    },
    {
      key: "3",
      text: "Puedes pagar en efectivo y con tarjeta de crédito o débito",
      image: require("../assets/img/welcome-3.png"),
    },
  ];

  const onDone = () => props.setShowRealApp(true);

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          onPress={onDone}
        />
      </View>
    );
  };

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.screen}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <View style={{ width: "60%" }}>
          <Text numberOfLines={2} style={styles.text}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={onDone}
      activeDotStyle={{ backgroundColor: "#FFB500" }}
      renderDoneButton={_renderDoneButton}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "70%",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255,181,0,0.6)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    marginVertical: 20,
    fontSize: RFPercentage(2.2),
    textAlign: "center",
  },
});

export default PantallaBienvenida;
