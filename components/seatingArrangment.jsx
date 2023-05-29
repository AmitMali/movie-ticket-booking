"use client";
import React from "react";
import Seat from "@/components/seat";
import { seatingArraingment } from "../data/seatingArrangment";
import { useSelector } from "react-redux";

const SeatingArrangment = () => {
  const totalPrice = useSelector((state) => state.booking.totalPrice);
  const seats = useSelector((state) => state.booking.bookedSeats);

  const blockedSeats = ["S1", "G8", "P1"];
  const bookedSeats = ["S5", "H9", "J5", "J6"];
  const ticketPrice = {
    platinun: 100,
    silver: 120,
    Executive: 150,
    executive: 180,
    recliner: 230,
  };
  const setSeatStatus = (seatNo) => {
    if (blockedSeats.includes(seatNo)) return "blocked";
    else if (bookedSeats.includes(seatNo)) return "booked";
    else return "available";
  };

  return (
    <>
      <div className=" flex justify-start items-center  mb-3">
        <div className="flex gap-2 p-5 items-center ml-16">
          <div className="w-5 h-5 flex justify-center items-center  bg-slate-300 border border-solid border-slate-500"></div>
          <p className="text-xs text-slate-700 ">Not Available</p>
          <div className="w-5 h-5 flex justify-center items-center  bg-red-300 border border-solid border-slate-500"></div>
          <p className="text-xs text-slate-700 ">Booked</p>
          <div className="w-5 h-5 flex justify-center items-center  bg-white border border-solid border-slate-500"></div>
          <p className="text-xs text-slate-700 ">Available</p>
        </div>
        <div>
          {totalPrice ? (
            <>
              <p className=" text-sm text-slate-700 ">
                <span className="text-slate-500"> Total Price:</span>
                {totalPrice && `${totalPrice} Rs`}
              </p>
              <p className=" text-sm text-slate-700 ">
                <span className=" text-slate-500"> Booked Seats:</span>{" "}
                {seats && seats.toString()}
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex  justify-center mt-2 border-top border-slate-500">
        <div className="flex flex-col-reverse">
          {Object.keys(seatingArraingment).map((row, id) => {
            const rowName = row + (Number(id) + 1);
            return (
              <>
                <div
                  key={rowName + id}
                  className=" p-6 w-3 h-3 flex justify-center items-center text-slate-500 border-r border-slate-500 mr-6 "
                >
                  {row}
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col-reverse">
          {Object.keys(seatingArraingment).map((row, id) => {
            const rowName = row + (Number(id) + 1);
            return (
              <>
                <div
                  key={rowName}
                  className="flex flex-row justify-center m-2 gap-2"
                >
                  {[...Array(seatingArraingment[row].noOfSeats).keys()].map(
                    (seatno) => {
                      let seatNo = row + Number(seatno + 1);
                      return (
                        <Seat
                          seatno={seatNo}
                          seatStatus={setSeatStatus(seatNo)}
                          ticketPrice={
                            ticketPrice[seatingArraingment[row].seatingClass]
                          }
                          key={seatno}
                          seatingClass={seatingArraingment[row].seatingClass}
                        />
                      );
                    }
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SeatingArrangment;
