import React, { useEffect, useState } from "react";
const Seat = ({ seatno, seatStatus }) => {
  const [currentSeatStatus, setCurrentSeatStatus] = useState(seatStatus);
  const [currentSeatStatusColor, setCurrentSeatStatusColor] =
    useState("bg-white");

  const seatStyle = (status) => {
    if (status === "blocked") return "bg-gray-300 cursor-not-allowed";
    else if (status === "booked") return "bg-red-300 cursor-not-allowed ";
    else if (status === "selected") return "bg-green-700 ";
    else if (status === "available") return "bg-white  hover:bg-green-200";
  };
  const changeStatus = () => {
    if (currentSeatStatus == "booked" || currentSeatStatus == "blocked") return;
    if (currentSeatStatus === "available") {
      setCurrentSeatStatus("selected");
    } else {
      setCurrentSeatStatus("available");
    }
  };
  useEffect(() => {
    setCurrentSeatStatusColor(seatStyle(currentSeatStatus));
  }, [currentSeatStatus]);
  return (
    <div
      className={`p-5 w-3 h-3 flex justify-center  items-center ${currentSeatStatusColor}  border border-solid border-gray-700 cursor-pointer`}
      onClick={changeStatus}
    >
      {seatno}
    </div>
  );
};

export default Seat;
