import React from "react";
import ProductCardImage from "./ProductCardImage";
import ProductRating from "./ProductRating";
import { Link } from "react-router-dom";
import carts from "../data/Cart";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`product-detail/${id}`}
      className="border border-gray-500 p-5 mb-5 flex flex-col items-start gap-5"
    >
      <ProductCardImage image={image} />
      <h3 className=" line-clamp-2 mt-auto"> {title}</h3>
      <ProductRating rate={rate} />
      <div className=" flex justify-between w-full items-end ">
        <p className=" "> {price}</p>

        {carts.find((cart) => cart.id == id) ? (
          <button className=" text-nowrap text-sm border bg-black text-white border-black px-1 ">Added</button>
        ) : (
          <button className=" text-nowrap text-sm border border-black px-1 ">
            Add Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
