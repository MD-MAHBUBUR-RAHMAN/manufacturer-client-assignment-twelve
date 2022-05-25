import React from "react";
import nAmerica from "./../../assets/img/icons8-north-america-64.png";
import sAmerica from "./../../assets/img/icons8-south-america-64.png";
import europ from "./../../assets/img/icons8-europe-64.png";
import asia from "./../../assets/img/icons8-asia-64.png";

const Distributor = () => {
  return (
    <div className="my-14">
      <div>
        <h5 className="text-xl md:text-5xl font-semibold text-secondary text-center py-5">
          Our Distributors
        </h5>
        <p className="text-lg md:text-2xl text-center pb-5">
          Our distributors are carefully selected for their efficient delivery,
          technical knowledge, and comprehensive support services.
        </p>
      </div>
      <hr className="w-1/2 md:w-full mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
        <div className="h-24 flex justify-around items-center border rounded-2xl">
          <img src={nAmerica} alt="" />
          <p className="text-xl font-bold text-gray-600">North America</p>
        </div>
        <div className="h-24 flex justify-around items-center border rounded-2xl">
          <img src={sAmerica} alt="" />
          <p className="text-xl font-bold text-gray-600">South America</p>
        </div>
        <div className="h-24 flex justify-around items-center border rounded-2xl">
          <img src={europ} alt="" />
          <p className="text-xl font-bold text-gray-600">Europ</p>
        </div>
        <div className="h-24 flex justify-around items-center border rounded-2xl">
          <img src={asia} alt="" />
          <p className="text-xl font-bold text-gray-600">Asia</p>
        </div>
      </div>
    </div>
  );
};

export default Distributor;
