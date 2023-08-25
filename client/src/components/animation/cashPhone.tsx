import React from "react";
import Lottie from "lottie-react";
import animation from "./cashPhone.json";

export const CashPhone = () => {
  return (
    <Lottie
      animationData={animation}
      loop={true}
      className="z-50"
      style={{ objectFit: "cover" }}
    />
  );
};
