import moment from "moment";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { set } from "react-native-reanimated";
import { RFPercentage } from "react-native-responsive-fontsize";
import { connect, useDispatch, useSelector } from "react-redux";
import { postCollection } from "../../apis/querys";
import CustomButton from "../../components/CustomButton";

import BasicHeader from "../../components/Header/BasicHeader";
import AddressIcon from "../../components/Icons/AddressIcon";
import CardIcon from "../../components/Icons/CardIcon";
import ChevronRightIcon from "../../components/Icons/ChevronRightIcon";
import OutlineUserIcon from "../../components/Icons/OutlineUserIcon";
import { colores } from "../../constantes/Temas";
import { registerForPushNotificationsAsync } from "../../functions/Notificaciones";
import { generateUUID } from "../../functions/UUID";
import Container from "../../generales/Container";
import { actions } from "../../redux";

const OrderDetails = ({
  cart,
  navigation,
  prePedido,
  route,
  user,
  pushToken,
}) => {
  const [metodo, setMetodo] = useState("Efectivo");
  const [notifyToken, setNotifyToken] = useState("");

  const login = useSelector((state) => state.login.login);
  // const pushToken = useSelector((state) => state.pushToken.pushToken);
  // const dispatch = useDispatch();

  // console.log("notifyToken:", notifyToken);
  // console.log("pushToken:", pushToken);

  let total = 0;
  let domicilio = 2;

  cart.map((c) => {
    total = total + c.quantity * c.product.price;
  });

  total = total + domicilio;
  useEffect(() => {
    const getToken = async () => {
      await registerForPushNotificationsAsync().then((token) => {
        // console.log("token:", token.length);
        setNotifyToken(token);
      });
      // dispatch(actions.setPushToken(notifyToken));
    };
    getToken();
  }, [notifyToken]);

  const handleConfirmPurchase = () => {
    const payload = {
      date: moment(Date.now()).format("YYYY-MM-DD"),
      time: moment(Date.now()).format("'HH:mm:ss'"),

      products: cart,
      orderStatus: "Solicitado",
      user_id: login.uid,
      userNotificationToken: notifyToken,
      total: route.params.total,
      title: prePedido.direccion.address,
      userName: login.userName,
      payType: metodo,
      payWith: route.params.payWith,
      // products: value.productos,
      id: generateUUID(),
      // pushToken: value.pushToken,
    };

    prePedido.direccion && prePedido.facturacion
      ? postCollection("plant_pedidos_en_camino", payload).then((r) => {
          r
            ? navigation.navigate("OrderDetails")
            : alert("Ups, sucedió un error");
        })
      : alert("Por favor complete todos los campos");
  };

  const handleNavigateCash = () => {
    setMetodo("Efectivo");
    navigation.navigate("PayWithCash");
  };

  return (
    <Container>
      <BasicHeader title="Revisar datos del pedido" />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddressDeliveryUsers")} //MyAddress
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
              {prePedido.direccion
                ? prePedido.direccion.address
                : "Direccion de entrega"}
            </Text>
            <Text>
              {prePedido.direccion
                ? prePedido.direccion.addressDetails
                : "Elige una dirección"}
            </Text>
          </View>
          <ChevronRightIcon width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("FactuList")} //MyFactuData
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
              setMetodo("Tarjeta");
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
              handleNavigateCash();
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
          <CustomButton
            onPress={() => {
              handleConfirmPurchase();
            }}
          >
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
  user: state.user.user,
  pushToken: state.pushToken.pushToken,
});

export default connect(mapStateToProps)(OrderDetails);
