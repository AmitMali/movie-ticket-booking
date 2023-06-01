import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  bookedSeats: [],
  movieTitle: "",
  showTime: "",
  screen: "",
  theaterId: "",
};

export const movieBookingSlice = createSlice({
  name: "movieBooking",
  initialState,
  reducers: {
    setBookingData: (state, action) => {
      const { movieID, movieTitle, theaterId, screen, showTime } =
        action.payload;
      state.movieTitle = movieTitle;
      state.theaterId = theaterId;
      state.screen = screen;
      state.showTime = showTime;
      state.movieID = movieID;
    },
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
export const { addBookedSeats, removeBookedSeats, setBookingData } =
  movieBookingSlice.actions;

export default movieBookingSlice.reducer;
