import { combineReducers } from 'redux';

import login, { actualizarLogin } from './reducer/login';
import navigation, { actualizarNavigation } from './reducer/navigation';
import cart, {UpdateCart} from './reducer/cart'

export default combineReducers({
	login,
	navigation,
	cart
});

export const actions = {
	actualizarLogin,
	actualizarNavigation,
	UpdateCart
};

