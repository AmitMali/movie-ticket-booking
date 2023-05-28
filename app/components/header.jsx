"use client";
import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const totalPrice = useSelector((state) => state.booking.totalPrice);
  const seats = useSelector((state) => state.booking.bookedSeats);

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Book Movie</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <div>
            <p className="  ">Total Price :{totalPrice && totalPrice}</p>
            <p className="  ">Total Price : {seats && seats.toString()}</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
