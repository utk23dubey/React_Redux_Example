import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counter";
import authenticateReducer from "./auth/auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticateReducer,
  },
});

export default store;
