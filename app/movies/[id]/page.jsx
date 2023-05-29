"use client";

import SeatingArrangment from "@/components/seatingArrangment";
import React from "react";
const page = ({ params }) => {
  const movieId = params.id;

  return (
    <div className="">
      <h3 className="text-2xl font-bold text-red-500 capitalize ">{movieId}</h3>
      <div className=" ">
        <SeatingArrangment />
      </div>
    </div>
  );
};

export default page;
