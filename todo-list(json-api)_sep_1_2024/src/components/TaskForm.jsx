import React, { useRef, useState } from "react";
import { spiral } from "ldrs";


// Default values shown

const TaskForm = ({ addTask, sending }) => {
  const jobRef = useRef("");

  const handleAddTaskBtn = () => {

    if (jobRef.current.value) {
      const newTask = {
        job: jobRef.current.value,
        isDone: false,
      };

     
      spiral.register();
      
      jobRef.current.value = "";
      addTask(newTask);
    } else {
      alert("please fill tasks");
    }
  };

  return (
    <div className={`flex items-end mb-10`}>
      <input
        ref={jobRef}
        type="text"
        className=" rounded w-full border-b border-slate-400 font-medium text-gray-900 bg-slate-300  py-2 px-2 outline-none"
        placeholder={`${sending ? "Sending....." : "Add Task"}`}
        name=""
        id=""
        disabled={sending}
      />
      <button
        disabled={sending}
        className=" bg-slate-600 hover:bg-slate-500 active:bg-slate-800 text-slate-50 font-bold px-7 py-3  rounded-tl-full rounded-r-full "
        onClick={handleAddTaskBtn}
      >
        {sending ? (
          <div className=" px-1.5 text-center">
            <l-spiral size="20" speed="0.9" color="white"></l-spiral>
          </div>
        ) : (
          "Add"
        )}
      </button>
    </div>
  );
};

export default TaskForm;
