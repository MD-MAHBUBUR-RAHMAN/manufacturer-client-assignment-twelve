import React from "react";

const Review = ({ reviews }) => {
  const { name, email, review } = reviews;
  const post = review.slice(0, 300);
  return (
    <div className="card mx-w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <span className="text-primary font-semibold">Customer </span>: {name}
        </h2>
        <p className="text-lg">
          <span className="text-primary font-semibold">Review : </span>
          {post}
        </p>
        <p className="text-lg">
          <span className="text-primary font-semibold">Email : </span>
          {email}
        </p>
      </div>
    </div>
  );
};

export default Review;
