import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/Product";
import Container from "../components/Container";
import ProductRating from "../components/ProductRating";
import BreadCrumb from "../components/BreadCrumb";

const ProductDetail = () => {
  // console.log(useParams());

  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);
  // console.log(productId);
  // console.log(currentProduct);
  return (
    <div className=" px-5">
      <Container>
        <BreadCrumb currentPageTitle="ProductDetail" />
        <div className=" border border-black  p-10">
          <div className=" grid grid-cols-2 ">
            <div className=" col-span-1">
              <img
                src={currentProduct.image}
                className=" w-3/4 block mx-auto"
                alt=""
              />
            </div>
            <div className=" col-span-1 flex flex-col gap-5 items-start">
              <h1 className=" font-bold text-3xl ">{currentProduct.title}</h1>
              <p className=" bg-gray-200 text-gray-700 px-5 py-1 inline-block justify-start">
                {currentProduct.category}
              </p>
              <p>{currentProduct.description}</p>
              <ProductRating rate={currentProduct.rating.rate} />
              <div className=" flex justify-between w-full items-end ">
                <p className=" "> Price: ( {currentProduct.price})</p>
                <button className=" text-nowrap text-sm border border-black px-1 ">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
