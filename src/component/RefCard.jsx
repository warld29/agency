/* eslint-disable react/prop-types */
import React from "react";

const RefCard = ({ icon, num, msg }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h4 className="text-2xl text-gray-900 font-semibold">{num}</h4>
          <p>{msg}</p>
        </div>
      </div>
    </>
  );
};

export default RefCard;
