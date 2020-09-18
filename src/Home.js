import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//importaciones necesarias para redux//
import { connect } from 'react-redux';
import { actions } from './redux';
import { getAllUsers } from './apis/firebase';
import Container from './generales/Container';

function Home(props) {
	const { login, dispatch, navigation } = props;

	const probando = async () => {
		await getAllUsers((r) => {});
	};

	useEffect(() => {
		dispatch(actions.actualizarNavigation(navigation));
	}, []);

	return (
		<Container style={styles.container}>
			<Text>Hola Mundo</Text>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		flex: 1,
	},
});
//
const mapStateToProps = (state) => ({ login: state.login });
export default connect(mapStateToProps)(Home);
