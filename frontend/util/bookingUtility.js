//TODO: latter fetch booked seats and blocked seats from api
const blockedSeats = ["S1", "G8", "P1"];
const bookedSeats = ["S5", "H9", "J5", "J6"];
export const setSeatStatus = (seatNo) => {
  //check status of seats in booked seats array and blocked seat array

  if (blockedSeats.includes(seatNo)) return "blocked";
  else if (bookedSeats.includes(seatNo)) return "booked";
  else return "available";
};
