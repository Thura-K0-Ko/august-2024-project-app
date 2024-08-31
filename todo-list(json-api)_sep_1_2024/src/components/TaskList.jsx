import React, { useState } from "react";
import { spiral } from "ldrs";

import { dotStream } from "ldrs";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const TaskList = ({ task: { id, job, isDone }, removeTask, doneTask }) => {
  const [checking, setChecking] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelBtn = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleting(true);
        removeTask(id);
        dotStream.register();
      }
    });

    setDeleting(false);
  };

  const handleDoneTask = async () => {
    setChecking(true);
    await doneTask(id, isDone);
    spiral.register();
    if (isDone) {
      toast.success("Unlock Task");
    } else {
      toast.success("Done This Job");
    }
    setChecking(false);
  };
  return (
    <div className=" px-5 py-2 mt-2 border border-slate-400 bg-slate-100  hover:bg-gray-200 rounded-full flex justify-between items-center gap-3 group hover:py-2.5">
      <div className=" flex items-center gap-3">
        {checking ? (
          <l-spiral size="20" speed="0.9" color="black"></l-spiral>
        ) : (
          <input
            onChange={handleDoneTask}
            type="checkbox"
            className={`h-4 w-4  cursor-pointer `}
            name=""
            id={id}
            checked={isDone}
          />
        )}

        <p className={`font-medium text-gray-800 ${isDone && " line-through"}`}>
          {job}
        </p>
      </div>

      {deleting ? (
        <l-dot-stream size="40" speed="2.5" color="red"></l-dot-stream>
      ) : (
        <button
          onClick={handleDelBtn}
          className=" bg-red-600 rounded-full p-1 hover:bg-red-800  hover:text-slate-300  group-hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 fill-slate-50"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TaskList;
