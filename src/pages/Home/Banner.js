import React from "react";
import banner from "../../assets/img/banner-medium.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-[800px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-10 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 md:text-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
