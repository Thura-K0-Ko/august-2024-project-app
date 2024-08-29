import React from "react";

const ProductCardImage = ({image}) => {
  return (
    <>
      <img src={image} className=" h-32 mb-2" alt="" />
    </>
  );
};

export default ProductCardImage;
