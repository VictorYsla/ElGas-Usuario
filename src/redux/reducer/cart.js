export const ADD_ELEMENT = 'ADD_ELEMENT';
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
export const DELETE_CART = 'DELETE_CART';
export const EDIT_CART = 'EDIT_CART';

export const AddElement = (element) => ({
	type: ADD_ELEMENT,
	element,
});
export const RemoveElement = (element) => ({
    type:REMOVE_ELEMENT,
    element
})
export const DeleteCart = () => ({
    type:DELETE_CART
})
export const EditCart = (index,element) => ({
    type:EDIT_CART,
    index,
    element
})

const initialState = {
    Cart:{
        cart: [
            // {
            //     name:'name',
            //     id:'id',
            //     price:0,
            //     quantity:0,
            // }
        ],
        totalPrice:0
    }
};

export default (state = initialState, action) => {
    let newState = { ...state }
	switch (action.type) {
		case ADD_ELEMENT:
            newState.Cart.cart.push(action.element)
            let total = 0
            newState.Cart.cart.map((value)=>{total+= value.price*value.quantity})
            newState.Cart.totalPrice = total
            return newState;
        case REMOVE_ELEMENT:
            newState.Cart.cart = newState.Cart.cart.filter(value => value.name !== action.element.id)
            let total = 0
            newState.Cart.cart.map((value)=>{total+= value.price*value.quantity})
            newState.Cart.totalPrice = total
            return newState;
        case DELETE_CART:
            newState.Cart.cart.slice(0, newState.Cart.cart.length)
            newState.Cart.totalPrice = 0
            return newState;
        case EDIT_CART:
            newState.Cart.cart[action.index] = action.element
            let total = 0
            newState.Cart.cart.map((value)=>{total+= value.price*value.quantity})
            newState.Cart.totalPrice = total
			return newState;
		default:
			return state;
	}
};