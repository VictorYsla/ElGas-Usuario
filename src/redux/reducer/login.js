export const ACTUALIZAR_LOGIN = "ACTUALIZAR_LOGIN";

export const actualizarLogin = (login) => ({
  type: ACTUALIZAR_LOGIN,
  login,
});

const initialState = {
  login: {
    isLogged: false,
    uid: "",
    userName: "",
    email: "",
    token: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTUALIZAR_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    default:
      return state;
  }
};
