import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cargando from './Cargando';
import { connect } from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window')

function Container({ styleContainer, children, isloading = false, navigation, footer = true }) {
	return (
		<View style={styles.container}>
			<View style={[{ flex: 1, width: '100%' }, styleContainer]}>{children}</View>
			{footer && <Footer navigation={navigation.navigation} />}
			{isloading && (
				<Cargando style={{ position: 'absolute', backgroundColor: 'rgba(52,52,52,0.5)', height: '100%' }} />
			)}
		</View>
	);
}

const Footer = ({ navigation }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				width: '100%',
				height: hp(7.3),
				borderTopWidth: 1,
				justifyContent: 'space-around',
				alignItems: 'center',
				paddingHorizontal: 10,
			}}
		>
			<Item navigation={navigation} ruta={'Home'} />
			<Item navigation={navigation} ruta={'Home'} />
			<Item navigation={navigation} ruta={'Home'} />
			<Item navigation={navigation} ruta={'Home'} />
			<Item navigation={navigation} ruta={'Home'} />
		</View>
	);
};

const Item = ({ navigation, ruta }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				alert('Navega hacia ' + ruta);
				navigation.navigate(ruta);
			}}
			style={{
				width: 60,
				height: '80%',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'gray',
				borderRadius: 5,
			}}
		>
			<Text>Home</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		flex: 1,
	},
});
const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Container);
