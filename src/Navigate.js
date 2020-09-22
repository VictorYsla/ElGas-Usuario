import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import Home from './Home';
import PantallaBienvenida from '../components/PantallaBienvenida';
import PantallaLogin from '../components/PantallaLogin';
import AddressDeliveryForm from './screens/AddressDelivery/AddressDeliveryForm'
import AddressDeliveryOptions from './screens/AddressDelivery/AddressDeliveryOptions'
import AddressDeliveryUsers from './screens/AddressDelivery/AddressDeliveryUsers'
import AddressDeliveryFormUser from './screens/AddressDelivery/AddressDeliveryFormUser'

const Navegador = (props) => {
	const Stack = createStackNavigator();
	const [showRealApp, setShowRealApp] = useState(false);

	/* showRealApp ? (
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
    <PantallaBienvenida setShowRealApp={setShowRealApp} />
  ); */

	return <AddressDeliveryForm />;
};

const EditUserInfoStack = createStackNavigator()
const EditUserInfo = ({}) => {
  return(
    <EditUserInfoStack.Navigator>
      <EditUserInfoStack.Screen />
    </EditUserInfoStack.Navigator>
  )
}


const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
		//backgroundColor: '#e1e8f4',
	},
});

const mapStateToProps = (state) => ({
	login: state.login,
});

export default connect(mapStateToProps)(Navegador);
