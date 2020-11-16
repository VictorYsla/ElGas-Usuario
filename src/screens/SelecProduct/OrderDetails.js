import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import BasicHeader from '../../components/Header/BasicHeader';
import AddressIcon from '../../components/Icons/AddressIcon';
import CardIcon from '../../components/Icons/CardIcon';
import CashIcon from '../../components/Icons/CashIcon';
import ChevronRightIcon from '../../components/Icons/ChevronRightIcon';
import OutlineUserIcon from '../../components/Icons/OutlineUserIcon';
import { colores } from '../../constantes/Temas';
import Container from '../../generales/Container';

const OrderDetails = ({ cart, navigation }) => {
	const [metodo, setmetodo] = useState('Efectivo');

	let total = 0;
	let domicilio = 2;

	cart.map((c) => {
		total = total + c.quantity * c.product.price;
	});

	total = total + domicilio;

	return (
		<Container>
			<BasicHeader title="Revisar datos del pedido" />
			<View style={styles.container}>
				<TouchableOpacity
					style={[
						{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							width: '100%',
							marginVertical: 10,
						},
					]}
				>
					<AddressIcon height={30} width={30} />
					<View>
						<Text>Direccion de entrega</Text>
						<Text>Datos de facturacion</Text>
					</View>
					<ChevronRightIcon width={20} height={20} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => navigation.navigate('MyFacturdata')}
					style={[
						{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							width: '100%',
							marginVertical: 10,
						},
					]}
				>
					<OutlineUserIcon height={30} width={30} />
					<View>
						<Text>Datos de facturacion</Text>
						<Text>Silvester Stalone</Text>
					</View>
					<ChevronRightIcon width={20} height={20} />
				</TouchableOpacity>

				{/* Summary */}

				<View
					style={[
						{
							width: '100%',
							backgroundColor: '#F2F2F2',
							alignItems: 'center',
							paddingVertical: 20,
						},
					]}
				>
					<Text>TOTAL DE LA COMPRA</Text>
					<Text>${total}</Text>
				</View>

				{/* Payment Method */}

				<View
					style={[
						{
							width: '100%',
							backgroundColor: '#F2F2F2',
							alignItems: 'center',
							paddingVertical: 20,
							marginVertical: 10,
						},
					]}
				>
					<Text>Modo de Pago</Text>
				</View>

				<View
					style={[
						{
							flexDirection: 'row',
							width: '80%',
							justifyContent: 'center',
						},
					]}
				>
					<TouchableOpacity
						onPress={() => {
							setmetodo('Tarjeta');
						}}
						style={[{ alignItems: 'center', width: '40%' }]}
					>
						<CardIcon height={40} width={40} />
						<Text
							style={[
								{
									textAlign: 'center',
									color: metodo == 'Tarjeta' ? colores.amarillo : 'black',
									fontWeight: metodo == 'Tarjeta' ? 'bold' : 'normal',
								},
							]}
						>
							Tarjeta de credito o debito
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setmetodo('Efectivo');
						}}
						style={[{ alignItems: 'center', width: '40%' }]}
					>
						<Image
							style={{ width: 80, height: 25, resizeMode: 'contain', marginTop: 8, marginBottom: 8 }}
							source={require('../../imagenes/efectivo.png')}
						/>
						<Text
							style={[
								{
									textAlign: 'center',
									color: metodo == 'Efectivo' ? colores.amarillo : 'black',
									fontWeight: metodo == 'Efectivo' ? 'bold' : 'normal',
								},
							]}
						>
							Efectivo
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		alignItems: 'center',
		flex: 1,
	},
});

const mapStateToProps = (state) => ({
	login: state.login.login,
	cart: state.cart.cart,
});

export default connect(mapStateToProps)(OrderDetails);
