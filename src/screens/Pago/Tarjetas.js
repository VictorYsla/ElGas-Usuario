import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { pantalla } from "../../constantes/Temas";

import Container from "../../generales/Container";

const Tarjetas = (props) => {
  const { screenWidth } = pantalla;

  const dummy_data = [
    {
      id: "1",
      cardNumber: "2144-4213-4124-1232",
      cardHolder: " Brayan García",
    },
    {
      id: "2",
      cardNumber: "2144-4213-4124-1232",
      cardHolder: " Brayan García",
    },
    {
      id: "3",
      cardNumber: "2144-4213-4124-1232",
      cardHolder: " Brayan García",
    },
    {
      id: "4",
      cardNumber: "2144-4213-4124-1232",
      cardHolder: " Brayan García",
    },
    {
      id: "5",
      cardNumber: "2144-4213-4124-1232",
      cardHolder: " Brayan García",
    },
  ];

  return (
    <Container styleContainer={styles.screen}>
      <View
        style={[
          {
            backgroundColor: "#F2f2f2",
            flexDirection: "row",
            width: "100%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text>Mis Tarjetas</Text>
      </View>

      <View style={styles.listContainer}>
        <ScrollView>
          {dummy_data.map((card) => {
            const cardNumber = card.cardNumber.split("-");
            const maskedText = `${cardNumber[0].substr(0, 2)}xxxxxxxxx${
              cardNumber[3]
            }`;
            return (
              <TouchableNativeFeedback key={card.id}>
                <View style={styles.listTile}>
                  <View
                    style={[
                      {
                        flex: 1,
                        flexDirection: "row",
                      },
                    ]}
                  >
                    <Image
                      source={require("../../../assets/img/card.png")}
                      style={[{ width: 25, height: 20, marginRight: 10 }]}
                      resizeMode="contain"
                    />
                    <Text style={styles.cardNumber}>{maskedText}</Text>
                  </View>
                  <Image
                    source={require("../../../assets/img/chevron-right.png")}
                    style={[{ height: 12, width: 12 }]}
                    resizeMode="contain"
                  />
                </View>
              </TouchableNativeFeedback>
            );
          })}
        </ScrollView>
      </View>
      <FAB
        style={{
          height: screenWidth > 360 ? 60 : 40,
          width: screenWidth > 360 ? 60 : 40,
          borderRadius: screenWidth > 360 ? 30 : 20,
        }}
        onPress={() => props.navigation.navigate("AgregarTarjeta")}
      />
    </Container>
  );
};

const FAB = (props) => {
  return (
    <View style={[styles.fab, { ...props.style }]}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={styles.fabImage}>
          <Image
            source={require("../../../assets/img/add.png")}
            style={[{ height: 15, width: 15 }]}
            resizeMode="contain"
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  listContainer: { width: "100%", height: "90%", marginVertical: 10 },
  listTile: {
    flexDirection: "row",
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#F2F2F2",
    borderBottomWidth: 1,
  },
  cardNumber: { fontWeight: "bold", fontSize: RFPercentage(2.5) },
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
export default Tarjetas;
