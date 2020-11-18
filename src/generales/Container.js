import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import Cargando from "./Cargando";
import { connect, useDispatch, useSelector } from "react-redux";
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
import { useNavigation } from "@react-navigation/native";
import { actions } from "../redux";
import { logout } from "../apis/querys";

function Container({
  styleContainer,
  children,
  isloading = false,
  footer = true,
}) {
  return (
    <View style={styles.container}>
      <View style={[{ flex: 1, width: "100%" }, styleContainer]}>
        {children}
      </View>
      {footer && <Footer />}
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

const Footer = () => {
  const { screenWidth } = pantalla;
  const routeName = useSelector((state) => state.navigation.routeName);

  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <View
        style={{
          width: "20%",
          borderTopWidth: routeName === "Products" ? 1 : 0,
          borderTopColor: routeName === "Products" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"Products"}
          texto="Inicio"
          icon={
            <SvgHome
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "Products" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          borderTopWidth: routeName === "MyAccount" ? 1 : 0,
          borderTopColor: routeName === "MyAccount" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"MyAccount"}
          texto="Mi Cuenta"
          icon={
            <SvgProfile
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "MyAccount" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          borderTopWidth: routeName === "MisPedidos" ? 1 : 0,
          borderTopColor: routeName === "MisPedidos" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"MisPedidos"}
          texto="Mis Pedidos"
          icon={
            <SvgOrders
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "MisPedidos" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          borderTopWidth: routeName === "Tarjetas" ? 1 : 0,
          borderTopColor: routeName === "Tarjetas" ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          ruta={"Tarjetas"}
          texto="Mis Tarjetas"
          icon={
            <CardIcon
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "Tarjetas" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
      <View
        style={{
          width: "20%",
          // borderTopWidth: logout ? 1 : 0,
          // borderTopColor: logout ? colores.amarillo : "",
        }}
      >
        <Item
          navigation={navigation}
          isLoggingOut
          texto="Cerrar Sesión"
          icon={
            <SvgLogout
              height={screenWidth <= 360 ? "30%" : "40%"}
              width={screenWidth <= 360 ? "30%" : "40%"}
              color={
                routeName === "Logout" ? colores.amarillo : colores.bgOscuro
              }
            />
          }
        />
      </View>
    </View>
  );
};

const Item = ({ navigation, ruta, texto, icon }) => {
  const { screenWidth } = pantalla;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => {
        if (ruta) {
          navigation.navigate(ruta);
        }
        if (
          ruta === "Products" ||
          ruta === "MyAccount" ||
          ruta === "MisPedidos" ||
          ruta === "Tarjetas"
        ) {
          dispatch(actions.actualizarUbicacion(ruta));
        } else {
          Alert.alert("Atención!", "¿Seguro de cerrar sesión?", [
            {
              text: "Si",
              onPress: () => {
                logout().then(() => {
                  dispatch(
                    actions.actualizarLogin({
                      isLogged: false,
                      uid: "",
                      userName: "",
                      email: "",
                      token: "",
                    })
                  );

                  dispatch(actions.clearUser());
                });
              },
            },
            { text: "Cancelar", onPress: () => {} },
          ]);
        }
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
    height: "100%",
    backgroundColor: "#fff",
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // elevation: 30,
    borderTopColor: "rgba(0,0,0,0.05)",
    borderTopWidth: 2,
    borderLeftColor: "rgba(0,0,0,0.05)",
    borderLeftWidth: 1,
    borderRightColor: "rgba(0,0,0,0.05)",
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
