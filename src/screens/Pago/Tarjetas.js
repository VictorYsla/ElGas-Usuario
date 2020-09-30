import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import BasicHeader from "../../components/Header/BasicHeader";

import CardIcon from "../../components/Icons/CardIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import PlusFloatingButton from "../../components/PlusFloatingButton";
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
      <BasicHeader title="Mis Tarjetas" />

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
                    <View style={[{ marginRight: 10 }]}>
                      <CardIcon width={25} height={20} />
                    </View>
                    <Text style={styles.cardNumber}>{maskedText}</Text>
                  </View>
                  <ChevronRightIcon height={12} width={12} />
                </View>
              </TouchableNativeFeedback>
            );
          })}
        </ScrollView>
      </View>
      <PlusFloatingButton
        onPress={() => props.navigation.navigate("AgregarTarjeta")}
      />
    </Container>
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
});
export default Tarjetas;
