import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Spinner;
