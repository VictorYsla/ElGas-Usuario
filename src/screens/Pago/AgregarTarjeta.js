import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomButton from "../../components/CustomButton";
import BasicHeader from "../../components/Header/BasicHeader";
import CardsBanner from "../../components/Icons/CardsBanner";
import Container from "../../generales/Container";

const AgregarTarjeta = (props) => {
  return (
    <Container styleContainer={[styles.screen]}>
      <BasicHeader title="Mis Tarjetas" />

      <View
        style={[
          {
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <View style={[styles.messageContainer]}>
          <Text style={[styles.message]}>
            Por tu seguridad paga tus servicios de El Gas con tu tarjeta de
            crédito.
          </Text>
          <Text style={[styles.message, { marginTop: 20 }]}>
            ¿Desconfías? No te preocupes, los datos son almacenados bajo
            estrictas normas de seguridad.
          </Text>
        </View>

        <View style={[{ width: "100%", height: 50 }]}>
          {/* <Image
            source={require("../../../assets/img/banner.png")}
            resizeMode="cover"
            style={{ height: "100%", width: "100%" }}
          /> */}
          <CardsBanner width="100%" height="100%" />
        </View>

        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
          }}
        >
          <TextInput
            style={{
              width: "70%",
              borderBottomColor: "#000",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
            placeholder="Nombre (Igual que en la tarjeta)"
          />
          <TextInput
            style={{
              width: "70%",
              borderBottomColor: "#000",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
            placeholder="Número de tarjeta"
          />
        </View>

        <View style={{ height: 40, width: 150 }}>
          <CustomButton>
            <Text>Guardar</Text>
          </CustomButton>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    minHeight: 500,
  },
  messageContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
  message: {
    fontSize: RFPercentage(2.4),
    textAlign: "center",
  },
});
export default AgregarTarjeta;
