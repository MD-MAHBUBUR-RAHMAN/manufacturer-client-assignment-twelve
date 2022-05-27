import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [users, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  const email = users?.email;
  const onSubmit = (data) => {
    // console.log(data);
    fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("You Updated Yor Profile Successfully");
        }
        reset();
      });
  };
  return (
    <div className="">
      <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
        {users?.displayName}
      </h3>
      <div className="card md:w-1/2 mx-auto bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-24 mx-auto rounded-full">
            <img src={users?.photoURL} alt="" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{users?.email}</h2>
        </div>
      </div>
      <div className="md:w-3/4 mx-auto my-10">
        <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
          Update Your Profile
        </h3>
        <form
          className="flex flex-col border p-5 rounded-lg mx-2 my-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="mb-2 text-center shadow block my-5 rounded-lg w-full md:text-xl  p-2"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          <input
            className="mb-2 text-center shadow block my-5 rounded-lg w-full md:text-xl  p-2"
            placeholder="Your Email"
            value={users?.email}
            readOnly
            {...register("email", { required: true })}
          />

          <input
            className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
            placeholder="Your Address"
            type="text"
            {...register("location", { required: true })}
          />
          <input
            className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
            placeholder="Your Image Url"
            type="text"
            {...register("img", { required: true })}
          />
          <input
            className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
            placeholder="Yur Phone Number"
            type="number"
            {...register("phone", { required: true })}
          />
          <input
            className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
            placeholder="social link"
            type="text"
            {...register("social")}
          />
          <input
            className="block mx-auto px-5 py-3 mt-10 mb-5 rounded-md bg-slate-700 text-white md:w-36 border-none  md:font-semibold "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
