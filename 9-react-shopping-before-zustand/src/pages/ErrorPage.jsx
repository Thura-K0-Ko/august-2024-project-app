import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className=" w-full h-screen flex justify-center items-center ">
      <div className=" text-center">
        <h1 className=" text-5xl font-bold mb-3">404 Not Found</h1>
        <p className=" text-gray-400 w-96 mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit vero,
          assumenda delectus quo accusantium pariatur!
        </p>
        <Link
          to={"/"}
          className=" border px-5 delay-100 py-2 shadow-lg hover:bg-slate-200 hover:text-black hover:border-slate-200 rounded"
        >
          Return to home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
