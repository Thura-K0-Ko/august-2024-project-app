import React from "react";
import products from "../data/Product";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import carts from "../data/Cart";

const CartSection = () => {
  
  return (
    <div className=" flex flex-col gap-3">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}

      <div className=" absolute bottom-10 w-full left-0 mb-7">
        <Container>
          <div className=" border-t border-black flex justify-end  gap-5  ">
            <div className=" text-right">
              <p className=" text-gray-400">Total</p>
              <p className=" font-bold ">123</p>
            </div>
            <div className=" text-right">
              <p className=" text-gray-400">Tax(10%)</p>
              <p className=" font-bold ">123</p>
            </div>
            <div className=" text-right">
              <p className=" text-gray-400">Net Total</p>
              <p className=" font-bold text-2xl">123</p>
            </div>
          </div>
          <div className=" text-end my-2">
            <Link className=" border-black py-1 px-3 border">Order Now</Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CartSection;
