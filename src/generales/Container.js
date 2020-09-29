import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import Cargando from "./Cargando";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

import { colores, pantalla } from "../constantes/Temas";
import SvgHome from "../components/Icons/HomeIcon";
import SvgProfile from "../components/Icons/ProfileIcon";
import SvgOrders from "../components/Icons/OrdersIcon";
import CardIcon from "../components/Icons/CardIcon";
import SvgLogout from "../components/Icons/LogoutIcon";
import {useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get("window");

function Container({
  styleContainer,
  children,
  isloading = false,
  navigation,
  footer = true,
}) {
  return (
    <View style={styles.container}>
      <View style={[{ flex: 1, width: "100%" }, styleContainer]}>
        {children}
      </View>
      {footer && <Footer navigation={navigation} />}
      {isloading && (
        <Cargando
          style={{
            position: "absolute",
            backgroundColor: "rgba(52,52,52,0.5)",
            height: "100%",
          }}
        />
      )}
    </View>
  );
}

const Footer = (/* { navigation } */) => {
  const { screenWidth } = pantalla;
  const navigation = useNavigation()

  const [home, setHome] = useState(true);
  const [profile, setProfile] = useState(false);
  const [orders, setOrders] = useState(false);
  const [cards, setCards] = useState(false);
  const [logout, setLogout] = useState(false);

  return (
    <View style={styles.footer}>
      <View
        style={{
          width: "20%",
          borderTopWidth: home ? 1 : 0,
          borderTopColor: home ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"Product"}
          texto="Inicio"
          isActive={() => {
            if (!home) {
              setHome(true);
              setProfile(false);
              setOrders(false);
              setCards(false);
              setLogout(false);
            }
          }}
          icon={
            <SvgHome
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={home ? colores.amarillo : colores.bgOscuro}
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          borderTopWidth: profile ? 1 : 0,
          borderTopColor: profile ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"Home"}
          texto="Mi Cuenta"
          isActive={() => {
            if (!profile) {
              setProfile(true);
              setHome(false);
              setOrders(false);
              setCards(false);
              setLogout(false);
            }
          }}
          icon={
            <SvgProfile
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={profile ? colores.amarillo : colores.bgOscuro}
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          borderTopWidth: orders ? 1 : 0,
          borderTopColor: orders ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"MisPedidos"}
          texto="Mis Pedidos"
          isActive={() => {
            if (!orders) {
              setOrders(true);
              setProfile(false);
              setHome(false);
              setCards(false);
              setLogout(false);
            }
          }}
          icon={
            <SvgOrders
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={orders ? colores.amarillo : colores.bgOscuro}
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          borderTopWidth: cards ? 1 : 0,
          borderTopColor: cards ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"Tarjetas"}
          texto="Mis Tarjetas"
          isActive={() => {
            if (!cards) {
              setCards(true);
              setOrders(false);
              setProfile(false);
              setHome(false);
              setLogout(false);
            }
          }}
          icon={
            <CardIcon
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={cards ? colores.amarillo : colores.bgOscuro}
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          borderTopWidth: logout ? 1 : 0,
          borderTopColor: logout ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"Home"}
          texto="Cerrar Sesión"
          isActive={() => {
            if (!logout) {
              setLogout(true);
              setCards(false);
              setOrders(false);
              setProfile(false);
              setHome(false);
            }
          }}
          icon={
            <SvgLogout
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={logout ? colores.amarillo : colores.bgOscuro}
            />
          }
        />
      </View>
    </View>
  );
};

const Item = ({ navigation, ruta, texto, icon, isActive }) => {
  const { screenWidth } = pantalla;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(ruta);
        isActive();
      }}
      style={styles.tabButton}
    >
      {icon}
      <Text
        style={{
          fontSize: screenWidth <= 360 ? RFPercentage(1.5) : RFPercentage(1.3),
          textAlign: "center",
        }}
      >
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopColor: "rgba(0,0,0,0.1)",
    borderTopWidth: 2,
    borderLeftColor: "rgba(0,0,0,0.1)",
    borderLeftWidth: 1,
    borderRightColor: "rgba(0,0,0,0.1)",
    borderRightWidth: 1,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  tabButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Container);
