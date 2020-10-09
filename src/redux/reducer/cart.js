export const ADD_ELEMENT = "ADD_ELEMENT";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const DELETE_CART = "DELETE_CART";
export const EDIT_CART = "EDIT_CART";

export const UpdateCart = {
  AddElement: (element) => ({
    type: ADD_ELEMENT,
    element,
  }),
  RemoveElement: (element) => ({
    type: REMOVE_ELEMENT,
    element,
  }),
  DeleteCart: () => ({
    type: DELETE_CART,
  }),
  EditQtyCart: (index, element, sum) => ({
    type: EDIT_CART,
    index,
    element,
    sum,
  }),
};

const initialState = {
  cart: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  let newState = { ...state };
  let total = newState.totalPrice;
  if (action.element) {
    var {
      element: {
        product: { id },
      },
    } = action;
  }
  //newState.Cart.cart.map((value)=>{total+= value.price*value.quantity})
  switch (action.type) {
    case ADD_ELEMENT:
      // console.log("Product", action.element);
      newState.cart.push(action.element);
      const newTotal = newState.totalPrice + action.element.total;
      newState.totalPrice = parseFloat(newTotal.toFixed(2));
      return newState;
    case REMOVE_ELEMENT:
      // console.log("Element", action.element);
      newState.cart = newState.cart.filter((value) => value.product.id !== id);
      const newTotalPrice =
        newState.totalPrice -
        action.element.product.price * action.element.quantity;
      newState.totalPrice = parseFloat(newTotalPrice.toFixed(2));
      return newState;
    case DELETE_CART:
      newState.cart.slice(0, newState.cart.length);
      newState.totalPrice = 0;
      return newState;
    case EDIT_CART:
      const { index, element, sum } = action;

      const suma = newState.cart[index].quantity + sum;
      if (suma > 0) {
        newState.cart[index].quantity = suma;
        newState.cart[index].total =
          newState.cart[index].quantity * newState.cart[index].product.price;
      } else {
        newState.cart = newState.cart.filter(
          (value) => value.product.id !== id
        );
        newState.totalPrice = newState.totalPrice;
      }

      const t =
        sum == -1
          ? (newState.totalPrice -= element.product.price)
          : (newState.totalPrice += element.product.price);

      newState.totalPrice = parseFloat(t.toFixed(2));
      // console.log("NewState: ", newState);

      return newState;
    default:
      return state;
  }
};
