import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import PantallaBienvenida from "../components/PantallaBienvenida";

const Navegador = (props) => {
  const Stack = createStackNavigator();
  const [showRealApp, setShowRealApp] = useState(false);

  return showRealApp ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <PantallaBienvenida />
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
