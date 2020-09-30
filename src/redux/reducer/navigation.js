export const ACTUALIZAR_NAVIGATION = "ACTUALIZAR_NAVIGATION";
export const ACTUALIZAR_UBICACION = "ACTUALIZAR_UBICACION";

export const actualizarNavigation = (navigation) => ({
  type: ACTUALIZAR_NAVIGATION,
  navigation,
});

export const actualizarUbicacion = (routeName) => ({
  type: ACTUALIZAR_UBICACION,
  routeName,
});

const initialState = {
  navigation: null,
  routeName: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTUALIZAR_NAVIGATION:
      return {
        ...state,
        navigation: action.navigation,
      };

    case ACTUALIZAR_UBICACION:
      return {
        ...state,
        routeName: action.routeName,
      };
    default:
      return state;
  }
};
