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
    EditQtyCart: (index,element, sum) => ({
        type:EDIT_CART,
        index,
        element,
        sum
    }),

}

const initialState = {
    Cart:{
        cart: [],
        totalPrice:0
    }
};

export default (state = initialState, action) => {
    let newState = { ...state }
    let total = newState.Cart.totalPrice
    if (action.element){
        var {element:{product:{id}}} = action
    }
    //newState.Cart.cart.map((value)=>{total+= value.price*value.quantity})
	switch (action.type) {
		case ADD_ELEMENT:
            newState.Cart.cart.push(action.element)
            newState.Cart.totalPrice = total
            return newState;
        case REMOVE_ELEMENT: 
            newState.Cart.cart = newState.Cart.cart.filter(value => value.product.id !== id)
            newState.Cart.totalPrice = total
            return newState;
        case DELETE_CART:
            newState.Cart.cart.slice(0, newState.Cart.cart.length)
            newState.Cart.totalPrice = 0
            return newState;
        case EDIT_CART:
            const {index, element, sum} = action
            if (index === -1){
                const obj ={...element, quantity:1, price: element.product.price}
                newState.Cart.cart.push(obj)
            }else{
                const suma = newState.Cart.cart[index].quantity + sum
                if (suma > 0){
                    newState.Cart.cart[index].quantity = suma
                }else{
                    newState.Cart.cart = newState.Cart.cart.filter(value => value.product.id !== id)
                }
            }
            let t = 0
            newState.Cart.cart.forEach((value, index)=>{
                t+=value.price*value.quantity
            })
            newState.Cart.totalPrice=t
            console.log('NewState: ', newState.Cart);

			return newState;
		default:
			return state;
	}
};