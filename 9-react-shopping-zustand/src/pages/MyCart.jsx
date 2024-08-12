import React from "react";
import { useParams } from "react-router-dom";
import CartSection from "../components/CartSection";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";

const MyCart = () => {
  return (
    <Container className=" flex-grow">
      <BreadCrumb currentPageTitle={"My Cart"}/>
      <CartSection />
    </Container>
  );
};

export default MyCart;
