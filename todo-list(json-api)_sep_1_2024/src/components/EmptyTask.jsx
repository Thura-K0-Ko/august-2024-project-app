import React from "react";
import reactImg from "/src/assets/react.svg";

const EmptyTask = () => {
  return (
    <div className="">
      <img src={reactImg} className=" w-40 mx-auto mt-16 animate-animated animate-spin " alt="" />
    </div>
  );
};

export default EmptyTask;
