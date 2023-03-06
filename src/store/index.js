import { configureStore } from "@reduxjs/toolkit";
import billsSlice from "./bills-slice";

const store = configureStore({
  reducer: {
    bills: billsSlice.reducer,
  },
});

export default store;
