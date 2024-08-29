import React from "react";

const CategoryButton = ({ category, current }) => {
  return (
    <button
      className={` ${
        current && "bg-gray-600 border-gray-600 hover:bg-gray-800 text-white"
      } text-nowrap border border-black me-2
     px-3 py-2 rounded hover:bg-gray-400 hover:text-white
      hover:border-gray-400`}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
