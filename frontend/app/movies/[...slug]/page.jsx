"use client";

import SeatingArrangment from "@/components/seatingArrangment";
import { cleanWhitespaceFromString } from "@/util/stringUtils";
import React from "react";
const page = ({ params }) => {
  const data = {
    movieTitle: cleanWhitespaceFromString(params.slug[0]),
    movieId: params.slug[1],
    theaterId: params.slug[2],
    screen: params.slug[3],
    showTime: params.slug[4],
  };

  return (
    <div className="">
      <div className=" ">
        <SeatingArrangment screenData={data} />
      </div>
    </div>
  );
};

export default page;
