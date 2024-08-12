import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className=" border border-black grid grid-cols-6 items-center p-2">
      <div className=" col-span-1">
        <img src={cart.product.image} className=" h-16" alt="" />
      </div>
      <div className=" col-span-3">
        <p className=" mb-2">{cart.product.title}</p>
        <p className=" text-gray-400">Price ( {cart.product.price} )</p>
      </div>
      <div className=" col-span-1">
        <p className="mb-2">Quantity</p>
        <div className=" flex items-center gap-2">
          <button className=" bg-black text-white px-2">-</button>
          {cart.quantity}
          <button className=" bg-black text-white px-2">-</button>
        </div>
      </div>
      <div className=" col-span-1">
        <p className=" text-end font-bold text-2xl">{cart.cost}</p>
      </div>
    </div>
  );
};

export default Cart;
