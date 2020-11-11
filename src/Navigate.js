import React, { useState } from 'react';

import { connect, useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import PantallaBienvenida from './screens/PantallaBienvenida';
import PantallaLogin from './screens/Auth/PantallaLogin';
import Registrarse from './screens/Auth/Registrarse';
import RecuperarContrasena from './screens/Auth/RecuperarContrasena';
import Tarjetas from './screens/Pago/Tarjetas';
import SeleccionarTarjeta from './screens/Pago/SeleccionarTarjeta';
import PantallaPedidos from './screens/User/PantallaPedidos';
import AgregarTarjeta from './screens/Pago/AgregarTarjeta';
import AddressDeliveryForm from './screens/AddressDelivery/AddressDeliveryForm';
import AddressDeliveryFormUser from './screens/AddressDelivery/AddressDeliveryFormUser';
import AddressDeliveryOptions from './screens/AddressDelivery/AddressDeliveryOptions';
import AddressDeliveryUsers from './screens/AddressDelivery/AddressDeliveryUsers';
import Products from './screens/SelecProduct/Products';
import ProductInfo from './screens/SelecProduct/ProductInfo';
import MyCart from './screens/SelecProduct/MyCart';
import DeliveryDetails from './screens/SelecProduct/DeliveryDetails';
import OrderDetails from './screens/SelecProduct/OrderDetails';
import { Platform } from 'react-native';
import NotificacionesEjemplo from './pruebas/NotificacionesEjemplo';
import MyInformation from './screens/MyAccount/MyInformation';
import MyAccount from './screens/MyAccount/MyAccount';

const Navegador = (props) => {
	const Stack = createStackNavigator();
	const [showRealApp, setShowRealApp] = useState(false);

	const isLogged = useSelector((state) => state.login.login?.isLogged);

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
							return <PantallaBienvenida {...props} setShowRealApp={setShowRealApp} />;
						}}
					</Stack.Screen>

					{/* Login Process */}
					<Stack.Screen name="Login" component={PantallaLogin} />
					<Stack.Screen name="Registrarse" component={Registrarse} />
					<Stack.Screen name="RecuperarContrasena" component={RecuperarContrasena} />
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
				{/* <Stack.Screen
          name="NotificacionesEjemplo"
          component={NotificacionesEjemplo}
        /> */}

				{/* <Stack.Screen name="Home" component={Home} /> */}

				{/* Product */}
				<Stack.Screen
					name="Products"
					component={Products}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen name="ProductInfo" component={ProductInfo} initialParams={{ item: null }} />
				<Stack.Screen
					name="MyCart"
					component={MyCart}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen
					name="DeliveryDetails"
					component={DeliveryDetails}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen
					name="OrderDetails"
					component={OrderDetails}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>

				{/* MyAccount */}
				<Stack.Screen
					name="MyInformation"
					component={MyInformation}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen
					name="MyAccount"
					component={MyAccount}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>

				{/* Mis Tarjetas */}
				<Stack.Screen
					name="Tarjetas"
					component={Tarjetas}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen
					name="AgregarTarjeta"
					component={AgregarTarjeta}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen
					name="SeleccionarTarjeta"
					component={SeleccionarTarjeta}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>

				{/* AddressDelivery */}
				<Stack.Screen
					name="AddressDeliveryForm"
					component={AddressDeliveryForm}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen
					name="AddressDeliveryFormUser"
					component={AddressDeliveryFormUser}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen
					name="AddressDeliveryOptions"
					component={AddressDeliveryOptions}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
				<Stack.Screen
					name="AddressDeliveryUsers"
					component={AddressDeliveryUsers}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>

				{/* Pedidos */}
				<Stack.Screen
					name="MisPedidos"
					component={PantallaPedidos}
					options={{
						cardStyleInterpolator:
							Platform.OS == 'ios'
								? CardStyleInterpolators.forHorizontalIOS
								: CardStyleInterpolators.forNoAnimation,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const mapStateToProps = (state) => ({
	login: state.login,
});

export default connect(mapStateToProps)(Navegador);
