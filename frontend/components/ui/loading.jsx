import Image from "next/image";
import React from "react";
import loader from "../../public/loader.svg";
const Loading = () => {
  return (
    <div className=" absolute left-1/2 top-1/2 ">
      <Image src={loader} />
      <p>wait while loading..</p>
    </div>
  );
};

export default Loading;
