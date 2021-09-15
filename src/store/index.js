import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authenticateReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticateReducer,
  },
});

export default store;
