"use client";
import { isLoggedIn } from "@/services/auth";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const totalPrice = useSelector((state) => state.booking.totalPrice);
  const seats = useSelector((state) => state.booking.bookedSeats);

  return (
    <div>
      <header className=" body-font bg-red-500 text-white">
        <div className="container mx-auto flex flex-wrap p-5 px-10 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold text-white">
              Book Movie
            </span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>
          <div>
            {isLoggedIn() ? (
              <Link
                className=" w-fit px-4 py-2  text-white"
                href={`/auth/login`}
              >
                Logout
              </Link>
            ) : (
              <Link
                className=" w-fit px-4 py-2  text-white"
                href={`/auth/signup`}
              >
                Signup
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
