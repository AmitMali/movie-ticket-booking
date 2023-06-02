"use client";

import { getTax } from "@/util/accountingUtility";
import { getLocalStorageWithExpiry } from "@/util/storageUtility";

const page = () => {
  const bookingData = getLocalStorageWithExpiry("bookingData");
  const baseAmount = 30;
  const CGST = Number(getTax(baseAmount, 9));
  const SGST = Number(getTax(baseAmount, 9));
  const convenienceFees = baseAmount + CGST + SGST;
  if (bookingData) {
    return (
      <div className="w-screen h-screen flex align-middle justify-center text-slate-800 bg-slate-100">
        <div className=" w-96 h-fit m-8 shadow-lg p-4 bg-white">
          <h3 className=" tracking-wider text-red-500 font-light ">
            BOOKING SUMMARY
          </h3>
          <h2 className=" font-semibold text-slate-800 tracking-wide">
            {bookingData.movieTitle}
          </h2>
          <div className="mt-4 flex justify-between font-light tracking-wide ">
            <p>
              {bookingData.bookedSeats.toString()} (
              {bookingData.bookedSeats.length} Tickets){" "}
            </p>
            <p>Rs. {bookingData.totalPrice}</p>
          </div>
          <div className="mt-4 flex justify-between font-light tracking-wide ">
            <p>Screen :{bookingData.screen}</p>
          </div>
          <div className=" mt-4 font-light font-sm text-zinc-700 tracking-wide  gap-x-6">
            <div className="flex justify-between font-light tracking-wide ">
              <p> Convenience fees </p>
              <p>Rs. {convenienceFees.toPrecision(4)}</p>
            </div>
            <p className="text-xs text-zinc-400">
              Base Amount : Rs. {baseAmount}
            </p>
            <p className="text-xs text-zinc-400">
              Central GST (CGST) @ 9% : Rs. {CGST}
            </p>
            <p className="text-xs text-zinc-400">
              State GST (SGST) @ 9%: Rs.{SGST}
            </p>
          </div>
          <hr className="text-zinc-800 my-4" />
          <div className="flex justify-between font-semibold tracking-wide ">
            <p> Total Amount </p>
            <p>
              Rs.
              {Number(bookingData.totalPrice) +
                Number(convenienceFees.toPrecision(4))}
            </p>
          </div>
          <div>
            <p className="text-xs text-zinc-500">
              your seats available for next 5 minutes <br />
              if you not confirm payment
            </p>
          </div>

          <button class=" bg-red-600 text-white font-semibold capitalize w-full mt-4 p-4 ">
            <span>Pay Now</span>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-screen h-screen flex align-middle justify-center text-slate-800 bg-slate-100">
        <div className=" w-96 h-fit m-8 shadow-lg p-4 bg-white">
          <h3 className=" tracking-wider text-red-500 font-light ">
            Time Expire Please Select seats again
          </h3>
        </div>
      </div>
    );
  }
};

export default page;
