import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="p-[100px] m-[10px] border flex
     justify-center items-center"
    >
      {children}
    </div>
  );
};

export default Card;
