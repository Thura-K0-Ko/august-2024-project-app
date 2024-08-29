import React from "react";

const Container = ({ children,className }) => {
  return (
    <div className={` w-full sm:w-3/4 md:w-[720px] lg:w-[1000px] mx-4 sm:mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
