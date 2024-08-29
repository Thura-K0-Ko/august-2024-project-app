import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
    "Electronics",
    "Jewelry",
    "Men's clothing",
    "Women's clothing",
  ];
  return (
    <section className=" p-5 ">
      <Container>
        <p className=" mb-2 font-semibold text-sm text-gray-500 ">{title}</p>
        <div className=" flex overflow-x-scroll example">
          <CategoryButton category={"All"} current={true} />
          {categories.map((category) => (
            <CategoryButton key={category} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
