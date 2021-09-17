import * as actionTypes from "./action";
const authInitialState = { isAuthenticated: false };
const reducer = (state = authInitialState, action) => {
  switch (action.type) {
    case actionTypes.login: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case actionTypes.logout: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
