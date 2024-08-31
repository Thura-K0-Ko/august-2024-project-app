import React from "react";

const Status = ({ tasks }) => {
  return (
    <div className=" mb-5  ">
      <p className=" text-md font-bold text-sky-600 font-mono">
        Tasks(Total <span> {tasks.length}, </span>
        Done <span> {tasks.filter(el=>el.isDone==true).length}</span>)
      </p>
    </div>
  );
};

export default Status;
