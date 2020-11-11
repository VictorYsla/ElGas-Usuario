import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import Constants from 'expo-constants';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist'; //NO BORRAR
import * as Notifications from 'expo-notifications';

import { store, persistor } from './src/redux/store';
import Cargando from './src/generales/Cargando';
import Navigate from './src/Navigate';
import { colores } from './src/constantes/Temas';
import { StatusBar } from 'expo-status-bar';

import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { firebaseApp } from './src/apis/firebase';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

function App() {
	const [load, setload] = useState(true);

	const notificationListener = useRef();
	const responseListener = useRef();

	useEffect(() => {
		// This listener is fired whenever a notification is received while the app is foregrounded
		notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
			console.log(notification);
		});

		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
			console.log(response);
		});

		return () => {
			Notifications.removeNotificationSubscription(notificationListener);
			Notifications.removeNotificationSubscription(responseListener);
		};
	}, []);

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
		// const firestore = firebase.firestore(firebaseApp);
		// persistStore(store).purge();

		fonts();
	}, []);

	return (
		!load && (
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={renderLoading()}>
					<Navigate />
					<StatusBar style="light" backgroundColor={colores.bgOscuro} />
				</PersistGate>
			</Provider>
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

export default App;
