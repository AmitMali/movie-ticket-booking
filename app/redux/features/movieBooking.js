import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  bookedSeats: [],
};

export const movieBookingSlice = createSlice({
  name: "movieBooking",
  initialState,
  reducers: {
    addBookedSeats: (state, action) => {
      const { seatNo, ticketPrice } = action.payload;
      state.bookedSeats.push(seatNo);
      state.totalPrice += ticketPrice;
    },
    removeBookedSeats: (state, action) => {
      const { seatNo, ticketPrice } = action.payload;
      state.bookedSeats = state.bookedSeats.filter((elem) => elem !== seatNo);
      state.totalPrice -= ticketPrice;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBookedSeats, removeBookedSeats } = movieBookingSlice.actions;

export default movieBookingSlice.reducer;
