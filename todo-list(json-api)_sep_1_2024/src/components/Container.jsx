import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" w-11/12 sm:w-8/12 lg:w-5/12 xl:w-2/6 mx-auto">{children}</div>
  );
};

export default Container;
