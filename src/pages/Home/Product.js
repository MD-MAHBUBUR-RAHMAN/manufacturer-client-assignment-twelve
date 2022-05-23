import React from "react";

const Product = ({ product }) => {
  const { _id, price, img, quantity, name, email, detail, minimum } = product;
  return (
    <div className="card max-w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{detail}</p>
        <p>Price per unit: $ {price}</p>
        <p>Available: {quantity} units</p>
        <p>minium order: {minimum} units</p>
        <p>Email : {email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
