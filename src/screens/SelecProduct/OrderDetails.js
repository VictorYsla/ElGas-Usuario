import React from "react";
import { View, Text, StyleSheet } from "react-native";

import BasicHeader from "../../components/Header/BasicHeader";
import AddressIcon from "../../components/Icons/AddressIcon";
import CardIcon from "../../components/Icons/CardIcon";
import CashIcon from "../../components/Icons/CashIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import OutlineUserIcon from "../../components/Icons/OutlineUserIcon";
import Container from "../../generales/Container";

const OrderDetails = (props) => {

  const methodPreparePayPhone = async () => {
    
  }
  
  return (
    <Container>
      <BasicHeader title="Revisar datos del pedido" />
      <View style={styles.container}>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginVertical: 10,
            },
          ]}
        >
          <AddressIcon height={30} width={30} />
          <View>
            <Text>Direccion de entrega</Text>
            <Text>Datos de facturacion</Text>
          </View>
          <ChevronRightIcon width={20} height={20} />
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              marginVertical: 10,
            },
          ]}
        >
          <OutlineUserIcon height={30} width={30} />
          <View>
            <Text>Datos de facturacion</Text>
            <Text>Silvester Stalone</Text>
          </View>
          <ChevronRightIcon width={20} height={20} />
        </View>

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
          <Text>$4.80</Text>
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
          <View style={[{ alignItems: "center", width: "40%" }]}>
            <CardIcon height={40} width={40} />
            <Text style={[{ textAlign: "center" }]}>
              Tarjeta de credito o debito
            </Text>
          </View>
          <View style={[{ alignItems: "center", width: "40%" }]}>
            <CashIcon height={40} width={40} />
            <Text>Efectivo</Text>
          </View>
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
export default OrderDetails;
