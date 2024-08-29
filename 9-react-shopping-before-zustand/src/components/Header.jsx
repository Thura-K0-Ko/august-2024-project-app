import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" md:mx-5 py-5 sticky ">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className=" text-3xl font-bold">Online Shop</Link>
          <Link to={"my-cart"} className=" border border-black px-5 py-3 text-sm relative">
            My Cart
            <span className=" text-white  absolute border top-0 right-0 bg-red-400 px-3 py-1  translate-x-1/2 -translate-y-1/2">
              1
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
