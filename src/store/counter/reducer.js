import { initialState } from "./store";
import * as actionTypes from "./action";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.increment: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case actionTypes.decrement: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case actionTypes.toggleContaoner: {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }

    case actionTypes.employee_success: {
      return {
        ...state,
        employee: state.employee,
      };
    }
    case actionTypes.employee_failure: {
      return {
        ...state,
        employee: {},
        error: state.error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
