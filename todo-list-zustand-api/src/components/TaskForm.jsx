import React from "react";

const TaskForm = () => {
  return (
    <div className=" flex items-end text-xl mb-10 sticky top-3 ">
      <input
        type="text"
        className=" w-full border-b border-slate-400 font-medium text-gray-800 bg-slate-300  py-2 px-2 outline-none"
        placeholder="Add Task"
        name=""
        id=""
      />
      <button className=" bg-slate-600 text-slate-50 font-bold px-7 py-3  rounded-tl-full rounded-r-full ">
        Add
      </button>
    </div>
  );
};

export default TaskForm;
