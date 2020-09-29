export const ADD_ELEMENT = 'ADD_ELEMENT';
export const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
export const DELETE_CART = 'DELETE_CART';
export const EDIT_CART = 'EDIT_CART';

export const UpdateCart = {
    AddElement: (element) => ({
        type: ADD_ELEMENT,
        element,
    }),
    RemoveElement: (element) => ({
        type:REMOVE_ELEMENT,
        element
    }),
    DeleteCart: () => ({
        type:DELETE_CART
    }),
    EditCart: (index,element) => ({
        type:EDIT_CART,
        index,
        element
    })
}

const initialState = {
    Cart:{
        cart: [
            // {
            //     product:{
            //         id:'',
            //         name:'',
            //         photo_url:'',
            //         order_id:0,
            //         descirption:''
            //     },
            //     category:{
            //         id:'',
            //         name:'',
            //         description:'',
            //         order_id:0
            //     }
            // }
        ],
        totalPrice:0
    }
};

export default (state = initialState, action) => {
    let newState = { ...state }
    let total = newState.Cart.totalPrice
    //newState.Cart.cart.map((value)=>{total+= value.price*value.quantity})
	switch (action.type) {
		case ADD_ELEMENT:
            newState.Cart.cart.push(action.element)
            newState.Cart.totalPrice = total
            return newState;
        case REMOVE_ELEMENT:
            newState.Cart.cart = newState.Cart.cart.filter(value => value.name !== action.element.id)
            newState.Cart.totalPrice = total
            return newState;
        case DELETE_CART:
            newState.Cart.cart.slice(0, newState.Cart.cart.length)
            newState.Cart.totalPrice = 0
            return newState;
        case EDIT_CART:
            newState.Cart.cart[action.index] = action.element
            newState.Cart.totalPrice = total
			return newState;
		default:
			return state;
	}
};