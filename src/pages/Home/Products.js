import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Product from "./Product";

const Products = () => {
  const url = `http://localhost:5000/product`;
  const { data: products, isLoading } = useQuery("Products", () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      total tools {products?.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
