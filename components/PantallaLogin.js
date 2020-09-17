import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	TouchableNativeFeedback,
	TextInput,
	Platform,
	KeyboardAvoidingView,
} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colores } from '../src/constantes/Temas';
import Envelop from '../assets/img/envelop.svg';
import Lock from '../assets/img/lock.svg';
import FbLogo from '../assets/img/fb-logo.svg';
import { StatusBar } from 'expo-status-bar';

const Button = (props) => {
	let TouchableComponent = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComponent = TouchableNativeFeedback;
	}

	return (
		<View
			style={{
				height: 50,
				width: '70%',
				borderRadius: 30,
				borderWidth: 1,
				overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
				marginVertical: 10,
				backgroundColor: props.color,
				borderColor: 'transparent',
			}}
		>
			<TouchableComponent onPress={() => {}} activeOpacity={0.6}>
				<View
					style={
						!props.horizontal
							? {
									flex: 1,
									height: '100%',
									width: '100%',
									alignItems: 'center',
									justifyContent: 'center',
							  }
							: {
									flex: 1,
									height: '100%',
									width: '100%',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
							  }
					}
				>
					{props.children}
				</View>
			</TouchableComponent>
		</View>
	);
};

const PantallaLogin = (props) => {
	return (
		<View style={styles.screen}>
			<View style={{ height: 80, width: 80 }}>
				<Image source={require('../assets/img/logo.png')} style={{ height: '100%', width: '100%' }} />
			</View>
			<Text style={styles.textoBienvenido}>Bienvenido</Text>

			<React.Fragment>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 10,
					}}
				>
					<Envelop height={14} width={25} />
					<TextInput
						style={[
							{
								width: 250,
								color: '#FFFFFF',
								borderBottomColor: '#FFFFFF',
								borderBottomWidth: 1,
								marginLeft: 5,
								marginBottom: 5,
								fontSize: 18,
							},
						]}
						placeholder="E-mail"
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 10,
					}}
				>
					<Lock height={20} width={25} />
					<TextInput
						style={[
							{
								width: 250,
								color: '#FFFFFF',
								borderBottomColor: '#FFFFFF',
								borderBottomWidth: 1,
								marginLeft: 5,
								marginBottom: 5,
								fontSize: 18,
							},
						]}
						placeholder="Password"
						secureTextEntry
					/>
				</View>
			</React.Fragment>

			<View style={styles.contenedor}>
				<Button color="#fff">
					<Text style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Ingresar</Text>
				</Button>
				<Button color="#227BC4" horizontal>
					<View style={{ width: '10%', marginLeft: 25 }}>
						<FbLogo height={18} width={20} />
					</View>
					<View style={{ width: '90%', marginLeft: 5 }}>
						<Text style={{ fontSize: RFPercentage(2.2), color: '#fff' }}>Continuar con Facebook</Text>
					</View>
				</Button>
			</View>

			<View style={[styles.contenedor, { height: 100 }]}>
				<TouchableOpacity activeOpacity={0.6} style={{ marginVertical: 10 }}>
					<Text style={{ color: '#fff' }}>¿No tienes una cuenta? Créala aquí</Text>
				</TouchableOpacity>

				<TouchableOpacity activeOpacity={0.6}>
					<Text style={{ color: '#fff' }}>Olvidé mi contraseña</Text>
				</TouchableOpacity>
			</View>

			<StatusBar style="light" />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colores.bgOscuro,
	},
	textoBienvenido: {
		fontSize: RFPercentage(3),
		marginVertical: 10,
		color: '#fff',
	},
	contenedor: {
		height: 150,
		width: '90%',
		alignItems: 'center',
		marginTop: 10,
	},
});
export default PantallaLogin;
