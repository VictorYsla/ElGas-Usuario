import React, { useState } from "react";

import { connect } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import PantallaBienvenida from "./screens/PantallaBienvenida";
import PantallaLogin from "./screens/Auth/PantallaLogin";
import Registrarse from "./screens/Auth/Registrarse";
import RecuperarContrasena from "./screens/Auth/RecuperarContrasena";
import Tarjetas from "./screens/Pago/Tarjetas";
import SeleccionarTarjeta from "./screens/Pago/SeleccionarTarjeta";
import PantallaPedidos from "./screens/User/PantallaPedidos";
import AgregarTarjeta from "./screens/Pago/AgregarTarjeta";
import { StyleSheet } from "react-native";

const Navegador = (props) => {
  const Stack = createStackNavigator();
  const [showRealApp, setShowRealApp] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="PantallaBienvenida"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PantallaBienvenida">
          {(props) => {
            return (
              <PantallaBienvenida {...props} setShowRealApp={setShowRealApp} />
            );
          }}
        </Stack.Screen>

        {/* Login Process */}
        <Stack.Screen name="Login" component={PantallaLogin} />
        <Stack.Screen name="Registrarse" component={Registrarse} />
        <Stack.Screen
          name="RecuperarContrasena"
          component={RecuperarContrasena}
        />

        {/* Mis Tarjetas */}
        <Stack.Screen name="Tarjetas" component={Tarjetas} />
        <Stack.Screen name="AgregarTarjeta" component={AgregarTarjeta} />
        <Stack.Screen
          name="SeleccionarTarjeta"
          component={SeleccionarTarjeta}
        />

        {/* Pedidos */}
        <Stack.Screen name="MisPedidos" component={PantallaPedidos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const EditUserInfoStack = createStackNavigator();
const EditUserInfo = ({}) => {
  return (
    <EditUserInfoStack.Navigator>
      <EditUserInfoStack.Screen />
    </EditUserInfoStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    //backgroundColor: '#e1e8f4',
  },
});

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(Navegador);
