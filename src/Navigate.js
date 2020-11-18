import React, { useState, useEffect } from "react";

import { connect, useSelector } from "react-redux";

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
import MyInformation from "./screens/MyAccount/MyInformation";
import MyAccount from "./screens/MyAccount/MyAccount";
import MyFactudata from "./screens/MyAccount/MyFactudata";

import * as firebase from "firebase";
import "@firebase/auth";

import { actions } from "./redux";
import { getCollection } from "./apis/querys";
import FactuForm from "./screens/Facturaciones/FactuForm";

const Navegador = ({ dispatch }) => {
  const Stack = createStackNavigator();
  const [showRealApp, setShowRealApp] = useState(false);
  const [initializing, setInitializing] = useState(true);

  const isLogged = useSelector((state) => state.login.login?.isLogged);

  const onAuthStateChanged = async (user) => {
    if (user) {
      const userData = await getCollection("plant_usuarios");
      const foundUser = userData.filter((us) => {
        return us.uid === user.uid;
      });

      // console.log("PantallaLogin user", user);
      // console.log("PantallaLogin foundUser", foundUser);

      dispatch(actions.actualizarLogin({ isLogged: true }));
      dispatch(actions.setUser(foundUser[0]));

      if (initializing) setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  let options = {
    cardStyleInterpolator:
      Platform.OS == "ios"
        ? CardStyleInterpolators.forHorizontalIOS
        : CardStyleInterpolators.forNoAnimation,
  };

  // console.log("PantallaLogin", initializing);

  if (!isLogged) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="PantallaBienvenida" //PantallaBienvenida,  DeliveryDetails
        >
          <Stack.Screen name="PantallaBienvenida">
            {(props) => {
              return (
                <PantallaBienvenida
                  {...props}
                  setShowRealApp={setShowRealApp}
                />
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="products" //PantallaBienvenida,  DeliveryDetails 'products'
      >
        {/* Product */}
        <Stack.Screen name="Products" component={Products} options={options} />
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          initialParams={{ item: null }}
        />
        <Stack.Screen name="MyCart" component={MyCart} options={options} />
        <Stack.Screen
          name="DeliveryDetails"
          component={DeliveryDetails}
          options={options}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={options}
        />

        {/* MyAccount */}
        <Stack.Screen
          name="MyInformation"
          component={MyInformation}
          options={options}
        />
        <Stack.Screen
          name="MyAccount"
          component={MyAccount}
          options={options}
        />

        {/* Mis Tarjetas */}
        <Stack.Screen name="Tarjetas" component={Tarjetas} options={options} />
        <Stack.Screen
          name="AgregarTarjeta"
          component={AgregarTarjeta}
          options={options}
        />
        <Stack.Screen
          name="SeleccionarTarjeta"
          component={SeleccionarTarjeta}
          options={options}
        />

        {/* Factur Data */}

        <Stack.Screen
          name="MyFactudata"
          component={MyFactudata}
          options={options}
        />

        <Stack.Screen
          name="FactuForm"
          component={FactuForm}
          options={options}
        />

        {/* AddressDelivery */}
        <Stack.Screen
          name="AddressDeliveryForm"
          component={AddressDeliveryForm}
          options={options}
        />
        <Stack.Screen
          name="AddressDeliveryFormUser"
          component={AddressDeliveryFormUser}
          options={options}
        />
        <Stack.Screen
          name="AddressDeliveryOptions"
          component={AddressDeliveryOptions}
          options={options}
        />
        <Stack.Screen
          name="AddressDeliveryUsers"
          component={AddressDeliveryUsers}
          options={options}
        />

        {/* Pedidos */}
        <Stack.Screen
          name="MisPedidos"
          component={PantallaPedidos}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps)(Navegador);
