import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChevronRightIcon from '../../components/Icons/ChevronRightIcon';
import PlusFloatingButton from '../../components/PlusFloatingButton';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { connect } from 'react-redux';
import { getCollection } from '../../apis/querys';

import { useFocusEffect } from '@react-navigation/native';
import { actions } from '../../redux';

function MyAddress({ user, login, dispatch, navigation }) {
	useFocusEffect(
		React.useCallback(() => {
			const userData = getCollection('plant_usuarios').then((response) => {
				const foundUser = response.filter((us) => us.uid === login.login.uid);
				dispatch(actions.setUser(foundUser[0]));
			});
		}, [])
	);

	// console.log('MyAdresss', user);

	useEffect(() => {}, []);

	return (
		<View style={{ width: '100%', flex: 1, justifyContent: 'center' }}>
			<FlatList
				data={user.direcciones ? user.direcciones : []}
				renderItem={(item) => <Item item={item} />}
				ListEmptyComponent={<Empty />}
			/>
			<PlusFloatingButton
				onPress={() => {
					navigation.navigate('AddressDeliveryForm');
				}}
			/>
		</View>
	);
}

const Empty = () => {
	return (
		<View
			style={{
				flex: 1,
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: 300,
			}}
		>
			<Text>Aún no agregaste una dirección</Text>
		</View>
	);
};

const Item = ({ item }) => {
	//   console.log("MyAddress", item);

	return (
		<View
			style={{
				height: 80,
				width: '80%',
				borderBottomWidth: 0.5,
				borderColor: 'rgba(52,52,52,0.5)',
				alignSelf: 'center',
				justifyContent: 'space-between',
				alignItems: 'center',
				flexDirection: 'row',
			}}
		>
			<View>
				<Text style={{ fontWeight: 'bold', fontSize: RFPercentage(2.3) }}>{item.item.address}</Text>
				<Text>{item.item.addressDetails}</Text>
			</View>

			<View style={{ justifyContent: 'center' }}>
				<ChevronRightIcon width={wp(4)} height={hp(2.5)} />
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({
	user: state.user.user,
	login: state.login,
});

export default connect(mapStateToProps)(MyAddress);
