import React from "react";
import useProducts from "../Hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const [products] = useProducts([]);
  return (
    <>
      <h2 className="text-center text-xl font-semibold md:text-5xl text-secondary my-10">
        Products Line
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
