export const ActionGenerico = "ActionGenerico";

export const actualizarPrePedido = (prePedido) => ({
  type: ActionGenerico,
  prePedido,
});

const initialState = {
  prePedido: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionGenerico:
      return {
        ...state,
        prePedido: action.prePedido,
      };
    default:
      return state;
  }
};
