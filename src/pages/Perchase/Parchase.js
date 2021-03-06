import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Parchase = () => {
  const [user, loading] = useAuthState(auth);
  // console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { id } = useParams();
  const url = `https://powerful-dawn-82606.herokuapp.com/product/${id}`;
  const { data: product, isLoading } = useQuery(["product", id], () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading />;
  }

  const { price, img, quantity, name, detail, minimum } = product;

  const onSubmit = (data) => {
    const alldata = { ...data, img, price, product: name };
    // console.log(alldata);
    const { orderQuantity, ...rest } = data;
    if (orderQuantity > parseInt(quantity)) {
      return toast.error(`You Cannot Order Over ${quantity} units`);
    }
    if (orderQuantity < parseInt(minimum)) {
      return toast.error(`Minimum Order ${minimum} Units Please`);
    }
    fetch("https://powerful-dawn-82606.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(alldata),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("Product Addeded successfully");
          reset();
          //   console.log("purchase", inserted);
        } else {
          toast.error("fail to add Product");
        }
        // console.log(result);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 mt-32 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            alt={name}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="md:ml-16">
            <h1 className="text-2xl lg:text-5xl font-bold">
              Product: <span className="text-secondary">{name}</span>
            </h1>
            <p className="py-6 text-lg">
              <span className="">{detail}</span>
            </p>
            <p className="py-1 text-lg font-semibold">
              Available : <span className="text-secondary">{quantity} </span>{" "}
              Units
            </p>
            <p className="py-1 text-lg font-semibold">
              Minimum : <span className="text-secondary">{minimum}</span> units
            </p>
            <p className="py-1 text-lg font-semibold">
              Price: <span className="text-secondary">{price}</span> PerUnit
            </p>
          </div>
        </div>
      </div>
      {/* -------------------------Form------------------------------- */}
      <div className="mb-20">
        <div className="w-3/4 mx-auto bg-base-100 mt-16">
          <div className="shadow-xl">
            <div className=" flex justify-center flex-col w-full">
              <h2 className="text-center text-bold text-2xl">Place Order</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-3/4 mx-auto">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name")}
                    value={user?.displayName || ""}
                    readOnly
                    type="name"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-3/4 mx-auto">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    value={user?.email || ""}
                    readOnly
                    type="email"
                    className="input input-bordered w-full"
                  />
                </div>
                {/* -------address-------- */}
                <div className="form-control w-3/4 mx-auto">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is requied",
                      },
                    })}
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.address?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* -----phone----- */}
                <div className="form-control w-3/4 mx-auto">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone Number is requied",
                      },
                    })}
                    type="number"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors.phone?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* ----------quantity----------- */}
                <div className="form-control w-3/4 mx-auto">
                  <label className="label">
                    <span className="label-text">Add Quantity</span>
                  </label>
                  <input
                    {...register("orderQuantity", {
                      required: {
                        value: true,
                        message: "Purchase Quantity is requied",
                      },
                    })}
                    type="number"
                    className="input input-bordered w-full"
                  />
                  <label className="label">
                    {errors?.orderQuantity?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.orderQuantity.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* -----Submit Input--------- */}
                <div className="flex justify-center mb-5">
                  <input
                    className="btn w-full max-w-xs text-white"
                    type="submit"
                    value="Order"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parchase;
