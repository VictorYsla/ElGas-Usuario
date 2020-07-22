import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';

const Navegador = (props) => {
	const Stack = createStackNavigator();

	return (
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
	);
};
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
