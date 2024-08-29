import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12">{children}</div>
  );
};

export default Container;
