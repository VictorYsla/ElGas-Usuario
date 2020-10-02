import React, { useState } from "react";

import { connect } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import Home from "./Home";
import PantallaBienvenida from "./screens/PantallaBienvenida";
import PantallaLogin from "./screens/Auth/PantallaLogin";
import Registrarse from "./screens/Auth/Registrarse";
import RecuperarContrasena from "./screens/Auth/RecuperarContrasena";
import Tarjetas from "./screens/Pago/Tarjetas";
import SeleccionarTarjeta from "./screens/Pago/SeleccionarTarjeta";
import PantallaPedidos from "./screens/User/PantallaPedidos";
import AgregarTarjeta from "./screens/Pago/AgregarTarjeta";
import AddressDeliveryForm from "./screens/AddressDelivery/AddressDeliveryForm";
import AddressDeliveryFormUser from "./screens/AddressDelivery/AddressDeliveryFormUser";
import AddressDeliveryOptions from "./screens/AddressDelivery/AddressDeliveryOptions";
import AddressDeliveryUsers from "./screens/AddressDelivery/AddressDeliveryUsers";
import Products from "./screens/SelecProduct/Products";
import ProductInfo from "./screens/SelecProduct/ProductInfo";
import MyCart from "./screens/SelecProduct/MyCart";
import DeliveryDetails from "./screens/SelecProduct/DeliveryDetails";
import OrderDetails from "./screens/SelecProduct/OrderDetails";
import { Platform } from "react-native";
import NotificacionesEjemplo from "./pruebas/NotificacionesEjemplo";

const Navegador = (props) => {
  const Stack = createStackNavigator();
  const [showRealApp, setShowRealApp] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Products" //PantallaBienvenida,  DeliveryDetails
      >
        <Stack.Screen
          name="NotificacionesEjemplo"
          component={NotificacionesEjemplo}
        />

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
        <Stack.Screen
          name="Tarjetas"
          component={Tarjetas}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen name="AgregarTarjeta" component={AgregarTarjeta} />
        <Stack.Screen
          name="SeleccionarTarjeta"
          component={SeleccionarTarjeta}
        />

        {/* AddressDelivery */}
        <Stack.Screen
          name="AddressDeliveryForm"
          component={AddressDeliveryForm}
        />
        <Stack.Screen
          name="AddressDeliveryFormUser"
          component={AddressDeliveryFormUser}
        />
        <Stack.Screen
          name="AddressDeliveryOptions"
          component={AddressDeliveryOptions}
        />
        <Stack.Screen
          name="AddressDeliveryUsers"
          component={AddressDeliveryUsers}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />

        {/* Product */}
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          initialParams={{ item: null }}
        />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />

        {/* Pedidos */}
        <Stack.Screen
          name="MisPedidos"
          component={PantallaPedidos}
          options={{
            cardStyleInterpolator:
              Platform.OS == "ios"
                ? CardStyleInterpolators.forHorizontalIOS
                : CardStyleInterpolators.forNoAnimation,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(Navegador);
