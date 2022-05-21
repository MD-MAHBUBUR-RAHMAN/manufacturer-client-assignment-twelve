import React from "react";
import dribble from "../../assets/img/dribbble_1.gif";

const Notfound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img src={dribble} alt="Not Found" />
    </div>
  );
};

export default Notfound;
