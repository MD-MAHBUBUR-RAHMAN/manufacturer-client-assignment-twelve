import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const name = user?.displayName;
  const email = user?.email;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  if (loading) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    // console.log(data);
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
        toast("Review Added successfully");
      });
  };
  return (
    <div>
      <h3 className="text-center text-primary">MY Review</h3>

      <form
        className="flex flex-col border md:p-5 rounded-lg mx-2 my-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* --User Name----- */}
        <div className="form-control w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Yor Name</span>
          </label>
          <input
            {...register("name")}
            readOnly
            value={name}
            type="text"
            className="input input-bordered w-full"
          />
        </div>
        {/* ----email input---------- */}
        <div className="form-control w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Add Your Email</span>
          </label>
          <input
            {...register("email")}
            readOnly
            value={email}
            type="text"
            className="input input-bordered w-full"
          />
        </div>
        {/* ----Review input------ */}
        <div className="form-control w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Add Review</span>
          </label>
          <textarea
            {...register("review", {
              required: {
                value: true,
                message: "review is requied",
              },
            })}
            type="text"
            className="input input-bordered w-full min-h-[200px]"
          />
          <label className="label">
            {errors.review?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.review.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="block mx-auto bg-sky-500 px-5 py-3 mt-10 mb-5 rounded-md hover:bg-slate-700 hover:text-white md:w-36 border-none text-black md:font-semibold "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
