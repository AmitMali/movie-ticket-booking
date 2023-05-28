import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBookedSeats,
  removeBookedSeats,
} from "../redux/features/movieBooking";
const Seat = ({ seatno, seatStatus, seatingClass, ticketPrice }) => {
  const dispatch = useDispatch();
  const [currentSeatStatus, setCurrentSeatStatus] = useState(seatStatus);
  const [currentSeatStatusColor, setCurrentSeatStatusColor] = useState();
  const seatStyle = (status) => {
    if (status === "blocked") return "bg-gray-300 cursor-not-allowed";
    else if (status === "booked") return "bg-red-300 cursor-not-allowed ";
    else if (status === "selected") return "bg-green-500 ";
    else if (status === "available") return "bg-white  hover:bg-green-100";
  };
  const changeStatus = () => {
    if (currentSeatStatus == "booked" || currentSeatStatus == "blocked") return;
    if (currentSeatStatus === "available") {
      setCurrentSeatStatus("selected");
      dispatch(addBookedSeats({ seatNo: seatno, ticketPrice, seatingClass }));
    } else {
      setCurrentSeatStatus("available");
      dispatch(
        removeBookedSeats({ seatNo: seatno, ticketPrice, seatingClass })
      );
    }
  };
  useEffect(() => {
    setCurrentSeatStatusColor(seatStyle(currentSeatStatus));
  }, [currentSeatStatus]);
  return (
    <div
      className={`p-2 w-8 h-8 text-xs flex justify-center rounded-sm items-center ${currentSeatStatusColor}  border border-solid border-gray-700 cursor-pointer`}
      onClick={changeStatus}
    >
      {seatno}
    </div>
  );
};

export default Seat;
