import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import CustomButton from "../../components/CustomButton";

import BasicHeader from "../../components/Header/BasicHeader";
import AddressIcon from "../../components/Icons/AddressIcon";
import CardIcon from "../../components/Icons/CardIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import OutlineUserIcon from "../../components/Icons/OutlineUserIcon";
import { colores } from "../../constantes/Temas";
import Container from "../../generales/Container";

const OrderDetails = ({ cart, navigation, prePedido }) => {
  const [metodo, setmetodo] = useState("Efectivo");

  // console.log("OrderDetails", prePedido);

  let total = 0;
  let domicilio = 2;

  cart.map((c) => {
    total = total + c.quantity * c.product.price;
  });

  total = total + domicilio;

  return (
    <Container>
      <BasicHeader title="Revisar datos del pedido" />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddressDeliveryUsers")}
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "75%",
              marginVertical: 10,
              alignSelf: "center",
            },
          ]}
        >
          <AddressIcon height={30} width={30} />
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text>
              {prePedido.direccion.address != undefined
                ? prePedido.direccion.address
                : "Direccion de entrega"}
            </Text>
            <Text>
              {prePedido.direccion.addressDetails != undefined
                ? prePedido.direccion.addressDetails
                : "Elige una dirección"}
            </Text>
          </View>
          <ChevronRightIcon width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("FactuList")}
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "75%",
              marginVertical: 10,
              alignSelf: "center",
            },
          ]}
        >
          <OutlineUserIcon height={30} width={30} />
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text>
              {prePedido.facturacion != undefined
                ? prePedido.facturacion.nombre
                : "Datos de facturación"}
            </Text>
            <Text>
              {prePedido.facturacion != undefined
                ? prePedido.facturacion.numero
                : "Elige una opción"}
            </Text>
          </View>
          <ChevronRightIcon width={20} height={20} />
        </TouchableOpacity>

        {/* Summary */}

        <View
          style={[
            {
              width: "100%",
              backgroundColor: "#F2F2F2",
              alignItems: "center",
              paddingVertical: 20,
            },
          ]}
        >
          <Text>TOTAL DE LA COMPRA</Text>
          <Text>${total}</Text>
        </View>

        {/* Payment Method */}

        <View
          style={[
            {
              width: "100%",
              backgroundColor: "#F2F2F2",
              alignItems: "center",
              paddingVertical: 20,
              marginVertical: 10,
            },
          ]}
        >
          <Text>Modo de Pago</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              width: "80%",
              justifyContent: "center",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              setmetodo("Tarjeta");
            }}
            style={[{ alignItems: "center", width: "40%" }]}
          >
            <CardIcon height={40} width={40} />
            <Text
              style={[
                {
                  textAlign: "center",
                  color: metodo == "Tarjeta" ? colores.amarillo : "black",
                  fontWeight: metodo == "Tarjeta" ? "bold" : "normal",
                },
              ]}
            >
              Tarjeta de credito o debito
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setmetodo("Efectivo");
            }}
            style={[{ alignItems: "center", width: "40%" }]}
          >
            <Image
              style={{
                width: 80,
                height: 25,
                resizeMode: "contain",
                marginTop: 8,
                marginBottom: 8,
              }}
              source={require("../../imagenes/efectivo.png")}
            />
            <Text
              style={[
                {
                  textAlign: "center",
                  color: metodo == "Efectivo" ? colores.amarillo : "black",
                  fontWeight: metodo == "Efectivo" ? "bold" : "normal",
                },
              ]}
            >
              Efectivo
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 60,
            width: "80%",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 20,
          }}
        >
          <CustomButton onPress={() => {}}>
            <Text
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: RFPercentage(2.2),
              }}
            >
              Confirmar compra
            </Text>
          </CustomButton>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  login: state.login.login,
  cart: state.cart.cart,
  prePedido: state.prePedido.prePedido,
});

export default connect(mapStateToProps)(OrderDetails);
