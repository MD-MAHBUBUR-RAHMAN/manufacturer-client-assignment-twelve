import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Distributor from "./Distributor";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSummery />
      <Distributor />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
