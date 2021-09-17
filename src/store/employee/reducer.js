import { initialState } from "./store";
import * as actionTypes from "./action";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.employees_success: {
      return {
        ...state,
        employees: state.employees.concat(action.employees),
      };
    }
    case actionTypes.employees_failure: {
      return {
        ...state,
        employees: [],
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
