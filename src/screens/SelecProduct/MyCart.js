import React, { useEffect, useState, useRef } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
	FlatList,
} from 'react-native';
import Container from '../../generales/Container';
import BasicHeader from '../../components/Header/BasicHeader';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { colores } from '../../constantes/Temas';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect, useSelector } from 'react-redux';
import { actions } from '../../redux/index';
import ItemCart from '../../components/ItemsList/ItemCart';
import CustomButton from '../../components/CustomButton';
import { postCollection } from '../../apis/querys';
// import { FlatList } from "react-native-gesture-handler";

const MyCart = ({ cart, navigation }) => {
	const localCartData = {
		delivery: 2,
	};

	const login = useSelector((state) => state.login.login);
	const expoPushToken = useSelector((state) => state.pushToken.pushToken);

	let total = 0;
	let domicilio = 2;

	cart.map((c) => {
		total = total + c.quantity * c.product.price;
	});

	total = total + domicilio;

	console.log('MayCart.js cart', cart);

	const onSubmit = () => {
		// const payload = {
		// 	products: cart,
		// 	orderStatus: 'Solicitado',
		// 	user_id: login.uid,
		// 	userNotificationToken: expoPushToken,
		// 	total,
		// };
		// // console.log("MayCart.js payload", payload);
		// postCollection('plant_pedidos_en_camino', payload).then((r) => {
		// 	r ? navigation.navigate('OrderDetails') : alert('Ups, sucedió un error');
		// });
		navigation.navigate('OrderDetails');
	};

	const orderTotal = parseFloat(total.toFixed(2)) + parseFloat(localCartData.delivery.toFixed(2));

	return (
		<Container
			style={{
				flex: 1,
				backgroundColor: '#fff',
				alignItems: 'center',
			}}
		>
			<BasicHeader title="Mi Carrito" onPressLeftIcon={() => navigation.goBack()} />
			<View style={[{ backgroundColor: colores.grisClaro, width: '100%' }]}>
				<Text
					style={{
						textAlign: 'center',
						fontSize: RFPercentage(2.6),
						marginTop: hp(1),
						fontWeight: '900',
					}}
				>
					TOTAL:
					<Text style={{ fontWeight: 'bold' }}>
						{' '}
						${cart.length === 0 ? total.toFixed(2) : orderTotal.toFixed(2)}
					</Text>
				</Text>
				<Text
					style={{
						textAlign: 'center',
						fontSize: RFPercentage(2),
						marginTop: hp(1),
					}}
				>
					Subtotal: ${total.toFixed(2)}
				</Text>
				<Text
					style={{
						textAlign: 'center',
						fontSize: RFPercentage(2),
						marginBottom: hp(1),
					}}
				>
					A domicilio: ${localCartData.delivery.toFixed(2)}
				</Text>
			</View>
			<View
				style={[
					{
						height: '70%',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						marginVertical: 20,
					},
				]}
			>
				<View
					style={{
						width: '100%',
						flex: 1,
						justifyContent: 'center',
						// backgroundColor: "red",
					}}
				>
					<FlatList
						data={cart}
						ListEmptyComponent={() => <Vacio navigation={navigation} />}
						renderItem={(item, index) => <ItemCart key={index} item={item} />}
						// ListFooterComponent={}
					/>
				</View>
				{cart.length != 0 && (
					<View
						style={[
							{
								width: 150,
								height: 40,
								marginVertical: 20,
							},
						]}
					>
						<CustomButton onPress={onSubmit}>
							<Text style={[{ fontWeight: 'bold', fontSize: RFPercentage(2.4) }]}>CONTINUAR</Text>
						</CustomButton>
					</View>
				)}
			</View>
		</Container>
	);
};

const Vacio = ({ navigation }) => {
	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: 200,
				// backgroundColor: "green",
			}}
		>
			<Text style={[{ fontSize: RFPercentage(2) }]}>No hay productos añadidos. Comienza a agregar!</Text>

			<View
				style={[
					{
						width: 150,
						height: 40,
						marginVertical: 20,
					},
				]}
			>
				<CustomButton onPress={() => navigation.goBack()}>
					<Text style={[{ fontWeight: 'bold', fontSize: RFPercentage(2.4) }]}>COMPRAR</Text>
				</CustomButton>
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({
	login: state.login.login,
	cart: state.cart.cart,
	total: state.cart.totalPrice,
});

const mapDispatchToProps = (dispatch) => {
	return {
		editCart: (index, element, sum) => {
			dispatch(actions.UpdateCart.EditQtyCart(index, element, sum));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
