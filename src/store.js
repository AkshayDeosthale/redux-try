import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../src/features/reservation";
import customerReducer from "../src/features/CustomerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    customer: customerReducer,
  },
});
