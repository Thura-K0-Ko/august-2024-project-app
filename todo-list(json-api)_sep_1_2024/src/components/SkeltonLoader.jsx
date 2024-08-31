import React from "react";

const SkeltonLoader = () => {
  return (
    <div className="">
      <div className="px-5 py-2 mt-2 border border-slate-400 bg-slate-100 rounded-full flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div className=" bg-slate-400 h-4 w-4 "></div>
          <div className=" bg-slate-400 h-4 w-24 sm:w-44 rounded "></div>
        </div>
        <div className=" bg-slate-400 rounded-full p-5"></div>
      </div>
      <div className="px-5 py-2 mt-2 border border-slate-400 bg-slate-100 rounded-full flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div className=" bg-slate-400 h-4 w-4 "></div>
          <div className=" bg-slate-400 h-4 w-24 sm:w-44 rounded "></div>
        </div>
        <div className=" bg-slate-400 rounded-full p-5"></div>
      </div>
      <div className="px-5 py-2 mt-2 border border-slate-400 bg-slate-100 rounded-full flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div className=" bg-slate-400 h-4 w-4 "></div>
          <div className=" bg-slate-400 h-4 w-24 sm:w-44 rounded "></div>
        </div>
        <div className=" bg-slate-400 rounded-full p-5"></div>
      </div>
    </div>
  );
};

export default SkeltonLoader;
