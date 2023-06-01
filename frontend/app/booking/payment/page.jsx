import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const booking = useSelector((state) => state.booking);
  console.log(booking);
  return <div></div>;
};

export default page;
