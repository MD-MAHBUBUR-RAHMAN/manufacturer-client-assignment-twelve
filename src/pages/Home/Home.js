import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Products from "./Products";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <BusinessSummery />
      <Products />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
