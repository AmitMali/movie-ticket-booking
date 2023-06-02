"use client";
import React, { useEffect } from "react";
import Seat from "@/components/ui/seat";
import { seatingArraingment } from "../data/seatingArrangment";
import { useDispatch, useSelector } from "react-redux";
import { setSeatStatus } from "@/util/bookingUtility";
import { BiRupee } from "react-icons/bi";
import { setBookingData } from "@/redux/features/movieBooking";
import { setLocalStorageWithExpiry } from "@/util/storageUtility";
import Link from "next/link";
const SeatingArrangment = (props) => {
  const { totalPrice, bookedSeats } = useSelector((state) => state.booking);
  const { movieTitle, screen, showTime, theaterId, movieId } = props.screenData;

  const dispatch = useDispatch();
  const ticketPrice = {
    //TODO: fetch prices of creen and seating time from api latter
    platinun: 100,
    silver: 120,
    Executive: 150,
    executive: 180,
    recliner: 230,
  };
  const bookingData = {
    movieId,
    movieTitle,
    screen,
    showTime,
    theaterId,
    totalPrice,
    bookedSeats,
  };
  useEffect(() => {
    dispatch(
      setBookingData({ movieId, movieTitle, screen, showTime, theaterId })
    );
    setLocalStorageWithExpiry("bookingData", bookingData, 1000 * 5 * 60);
  }, [bookedSeats]);
  return (
    <>
      <div className=" flex items-end justify-center mb-3">
        <div className="ml-16 p-5  ">
          <div className="mb-2">Movie : {movieTitle}</div>
          <div className="flex flex-row gap-2 items-center">
            <div className="w-5 h-5 flex justify-center items-center  bg-slate-300 border border-solid border-slate-500"></div>
            <p className="text-xs text-slate-700 ">Not Available</p>
            <div className="w-5 h-5 flex justify-center items-center  bg-red-300 border border-solid border-slate-500"></div>
            <p className="text-xs text-slate-700 ">Booked</p>
            <div className="w-5 h-5 flex justify-center items-center  bg-white border border-solid border-slate-500"></div>
            <p className="text-xs text-slate-700 ">Available</p>
          </div>
          <p className="text-sm text-slate-700 mt-2">
            {screen && `Screen: ${screen} `}
            {showTime && `| Show Time : ${showTime}`}
          </p>
        </div>
        <div className="p-5">
          {totalPrice ? (
            //show sealected seats and total price of booked seats

            <div>
              <p className=" text-sm text-slate-700 ">
                <span className=" text-slate-500"> Booked Seats:</span>{" "}
                {bookedSeats && bookedSeats.toString()}
              </p>
              <p className=" text-sm text-slate-700 ">
                <span className="text-slate-500"> Total Price:</span>
                {totalPrice && `${totalPrice} Rs`}
              </p>

              <Link
                href={`/booking/payment`}
                className="mx-1 inline-flex items-center justify-center gap-2 px-2 pt-2 text-small font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-100 focus:text-emerald-700 disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
              >
                <span className="order-2">Pay Now </span>
                <span className="relative only:-mx-4">
                  <BiRupee />
                </span>
              </Link>
            </div>
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
              //display vertical row alphabetical order
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
              // display horizontal row seats
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
