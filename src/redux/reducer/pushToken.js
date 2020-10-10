export const SET_PUSH_TOKEN = "SET_PUSH_TOKEN";

export const setPushToken = (token) => ({
  type: SET_PUSH_TOKEN,
  token,
});

const initialState = {
  pushToken: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PUSH_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
