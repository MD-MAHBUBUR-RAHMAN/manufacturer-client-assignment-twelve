import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const url = `https://powerful-dawn-82606.herokuapp.com/review`;
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-10">
      <h3 className="text-center text-xl font-semibold md:text-5xl text-primary my-10">
        Customers' Review
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {reviews.map((review) => (
          <Review key={review._id} reviews={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
