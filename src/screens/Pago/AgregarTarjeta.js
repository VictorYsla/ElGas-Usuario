import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableNativeFeedback,
} from "react-native";
import Picker from "react-native-picker-select";
import { RFPercentage } from "react-native-responsive-fontsize";

import Container from "../../generales/Container";
import BotonRegistrar from "../../components/CustomButton";

const AgregarTarjeta = (props) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const months = [
    { value: 1, label: "01" },
    { value: 2, label: "02" },
    { value: 3, label: "03" },
    { value: 4, label: "04" },
    { value: 5, label: "05" },
    { value: 6, label: "06" },
    { value: 7, label: "07" },
    { value: 8, label: "08" },
    { value: 9, label: "09" },
    { value: 0, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
  ];

  const year = new Date().getFullYear();
  const getYears = () => {
    const tempArr = [];
    for (let i = year; i <= year + 10; i++) {
      tempArr.push({ label: i.toString().substr(2, 2), value: i });
    }
    return tempArr;
  };

  const years = getYears();

  return (
    <Container styleContainer={styles.screen} footer={false}>
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
        <Text>Revisar datos tarjetas</Text>
      </View>

      <View style={styles.total}>
        <Text style={styles.totalLabel}>TOTAL PEDIDO</Text>
        <Text style={[styles.boldText, styles.totalLabel]}> $4.80 </Text>
      </View>
      <View style={styles.listTile}>
        <Image
          source={require("../../../assets/img/user.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: 15 }}
        />
        <Text style={[styles.boldText, styles.infoText]}>Fernando Carpio </Text>
      </View>
      <View style={styles.listTile}>
        <Image
          source={require("../../../assets/img/card.png")}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: 15 }}
        />
        <Text style={[styles.boldText, styles.infoText]}>46xxxxxxxxx2589 </Text>
      </View>

      <View style={styles.cardDetailsContainer}>
        <Text style={[styles.expireTitle]}>Fecha de Caducidad</Text>
        <View style={[styles.row, { marginVertical: 10 }]}>
          <Picker
            placeholder={{ label: "Mes", value: null }}
            onValueChange={(value) => setSelectedMonth(value)}
            value={selectedMonth}
            items={months}
            style={{ viewContainer: { width: 100 } }}
          />

          <Picker
            placeholder={{ label: "Año", value: null }}
            onValueChange={(value) => setSelectedYear(value)}
            value={selectedYear}
            items={years}
            style={{
              viewContainer: { width: 100 },
              headlessAndroidPicker: { width: 10 },
            }}
          />

          <TextInput
            style={{
              width: 50,
              borderBottomColor: "#000",
              borderBottomWidth: 1,
              marginVertical: 10,
              marginLeft: 10,
              textAlign: "center",
            }}
            placeholder="CVV"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <BotonRegistrar>
          <Text style={styles.buttonLabel}>Realizar Pago</Text>
        </BotonRegistrar>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  total: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    width: "100%",
    height: "15%",
  },
  totalLabel: {
    fontSize: RFPercentage(2.8),
  },
  listTile: {
    flexDirection: "row",
    height: 50,
    padding: 10,
    width: "80%",
  },
  boldText: { fontWeight: "bold" },
  infoText: { fontSize: RFPercentage(2.4) },
  expireTitle: { textAlign: "left" },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardDetailsContainer: {
    marginTop: 20,
    width: "80%",
  },
  buttonContainer: {
    width: 150,
    height: 40,
    marginTop: 50,
  },
  buttonLabel: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default AgregarTarjeta;
