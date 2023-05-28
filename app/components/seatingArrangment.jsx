import React from "react";

import Seat from "@/app/components/seat";
const SeatingArrangment = () => {
  const screenSeatRows = "ABCDEFGHIJKL";
  const blockedSeats = ["S1", "G8", "P1"];
  const bookedSeats = ["S5", "H9", "J5", "J6"];
  const rowPriceClass = {
    silver: "ABCDE",
    gold: "FGH",
    exlusive: "IJKL",
    recliner: "MN",
  };
  const setSeatStatus = (seatNo) => {
    if (blockedSeats.includes(seatNo)) return "blocked";
    else if (bookedSeats.includes(seatNo)) return "booked";
    else return "available";
  };

  return (
    <>
      <div className="flex gap-2 p-5">
        <div className="w-5 h-5 flex justify-center items-center  bg-slate-300 text-black border border-solid border-gray-700"></div>
        <p>Not Available</p>
        <div className="w-5 h-5 flex justify-center items-center  bg-red-300 text-black border border-solid border-gray-700"></div>
        <p>Booked</p>
        <div className="w-5 h-5 flex justify-center items-center  bg-white text-black border border-solid border-gray-700"></div>
        <p>Available</p>
      </div>
      <div className="grid grid-flow-row gap-6">
        {screenSeatRows.split("").map((rowName, id) => {
          return (
            <div
              key={rowName + id}
              className="seat-row p-3 w-2 h-2 border-solid grid grid-flow-col gap-2"
            >
              <div className=" p-5 w-3 h-3 flex justify-center items-center  bg-slate-300 text-black border border-solid border-gray-700 rounded-full">
                {rowName}
              </div>

              {[...Array(10).keys()].map((seatno) => {
                let seatNo = rowName + Number(seatno + 1);
                return (
                  <Seat
                    seatno={seatNo}
                    seatStatus={setSeatStatus(seatNo)}
                    key={seatno}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SeatingArrangment;
