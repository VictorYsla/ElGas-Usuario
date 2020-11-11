export const ADD_ELEMENT = "ADD_ELEMENT";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const DELETE_CART = "DELETE_CART";
export const EDIT_CART = "EDIT_CART";
export const ACTUALIZAR_CARRO = "ACTUALIZAR_CARRO";

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
  actualizarCarro: (cart) => ({
    type: ACTUALIZAR_CARRO,
    cart,
  }),
};

const initialState = {
  cart: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  let newState = { ...state };
  let total = newState.totalPrice;

  newState.cart.map((c) => {
    total = total + c.quantity * c.product.price;
  });

  // console.log("Product", newState.cart);

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
      newState.cart.push(action.element);
      newState.totalPrice = parseFloat(total.toFixed(2));
      return newState;
    case REMOVE_ELEMENT:
      // console.log("Element", action.element);
      newState.cart = newState.cart.filter((value) => value.product.id !== id);
      newState.totalPrice = parseFloat(total.toFixed(2));
      return newState;
    case DELETE_CART:
      return { cart: [], totalPrice: parseFloat(total.toFixed(2)) };

    case ACTUALIZAR_CARRO:
      return {
        ...state,
        cart: action.cart,
      };
    default:
      return state;
  }
};
