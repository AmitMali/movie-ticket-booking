import React from "react";

const Alert = (props) => {
  const alertClasses = {
    error: "border-red-100 bg-red-50 text-red-500",
    success: " border-emerald-100 bg-emerald-50 text-emerald-500",
    warning: "border-yellow-100 bg-yellow-50 text-yellow-500",
    info: "border-cyan-100 bg-cyan-50 text-cyan-500",
  };
  const alertClass = alertClasses[props.type];
  return (
    <>
      <div
        className={`w-full px-4 py-3 text-sm border rounded ${alertClass}`}
        role="alert"
      >
        <p>{props.message}</p>
      </div>
    </>
  );
};

export default Alert;
