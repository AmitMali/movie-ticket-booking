import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/movieBooking";
export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
