import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const PantallaBienvenida = (props) => {
  const slides = [
    {
      key: "1",
      text: "\n Regístrate para comprar \n       tu tanque de gas",
      image: require("../assets/img/welcome-1.png"),
      backgroundColor: "#59b2ab",
    },
    {
      key: "2",
      text: "\n          Tu cilindro de gas \n a un solo click de distancia",
      image: require("../assets/img/welcome-2.png"),
      backgroundColor: "#febe29",
    },
    {
      key: "3",
      text:
        "\n       Puedes pagar en efectivo \n y con tarjeta de crédito o débito",
      image: require("../assets/img/welcome-3.png"),
      backgroundColor: "#22bcb5",
    },
  ];

  const onDone = () => setShowRealApp(false);

  const _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 80 }}>
        <Image
          source={item.image}
          style={{ width: "90%", height: "80%" }}
          resizeMode="contain"
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={onDone}
      activeDotStyle={{ backgroundColor: "#FFB500" }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PantallaBienvenida;
