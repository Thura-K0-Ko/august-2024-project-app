import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import products from "../data/Product";

const ProductSection = () => {

  return (
    <section className=" px-5">
      <Container>
        <p className=" mb-2 font-semibold text-sm text-gray-500 ">
          Avaliable Product List
        </p>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
