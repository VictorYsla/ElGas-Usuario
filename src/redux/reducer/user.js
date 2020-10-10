export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};
