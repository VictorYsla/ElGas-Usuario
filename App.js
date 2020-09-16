import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import Constants from 'expo-constants';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'; //NO BORRAR

import { store, persistor } from './src/redux/store';
import Cargando from './src/redux/generales/Cargando';
import Navigate from './src/Navigate';

export default function App() {
	const [load, setload] = useState(true);

	const renderLoading = () => (
		<View style={styles.container}>
			<Cargando />
		</View>
	);

	const fonts = async () => {
		setload(true);
		await Font.loadAsync({
			RobotoBold: require('./assets/fonts/Roboto-BoldCondensed.ttf'),
			RobotoRegular: require('./assets/fonts/Roboto-Condensed.ttf'),
			RobotoItalic: require('./assets/fonts/Roboto-CondensedItalic.ttf'),
		});
		setload(false);
	};

	useEffect(() => {
		persistStore(store).purge();

		fonts();
	}, []);

	return (
		!load && (
			<View style={styles.container}>
				<Provider store={store}>
					<PersistGate persistor={persistor} loading={renderLoading()}>
						<Navigate />
					</PersistGate>
				</Provider>
			</View>
		)
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingTop: Platform.OS == 'ios' ? 0 : Constants.statusBarHeight,
	},
});
