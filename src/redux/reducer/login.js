export const ACTUALIZAR_LOGIN = 'ACTUALIZAR_LOGIN';

export const actualizarLogin = (login) => ({
	type: ACTUALIZAR_LOGIN,
	login,
});

const initialState = {
	login: {
		isLoged: false,
		uid: '',
		userName:'',
		email:'',
		token:''
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ACTUALIZAR_LOGIN:
			// console.log('In redux', state)
			return {
				...state,
				login: action.login,
			};
		default:
			return state;
	}
};
