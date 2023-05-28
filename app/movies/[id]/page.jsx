"use client";

import SeatingArrangment from "@/app/components/seatingArrangment";
import React from "react";
const page = ({ params }) => {
  const movieId = params.id;

  return (
    <div>
      <h3 className="text-2xl font-bold text-red-500 capitalize ">{movieId}</h3>
      <SeatingArrangment />
    </div>
  );
};

export default page;
