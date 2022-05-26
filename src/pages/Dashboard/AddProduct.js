import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/product`;
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
        toast("Added successfully");
      });
  };
  return (
    <div className="md:w-3/4 mx-auto my-10">
      <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
        Add Product
      </h3>
      <form
        className="flex flex-col border p-5 rounded-lg mx-2 my-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-2 text-center shadow block my-5 rounded-lg w-full md:text-xl  p-2"
          placeholder="Product Name"
          {...register("name", { required: true })}
        />
        <input
          className="mb-2 text-center shadow block my-5 rounded-lg w-full md:text-xl  p-2"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <textarea
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Add Detail Your Product"
          {...register("detail", { required: true })}
        />

        <input
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Price Per Unit"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Image Url"
          type="text"
          {...register("img", { required: true })}
        />
        <input
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Add Quentity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input
          className="mb-2 shadow block my-5 rounded-lg w-full md:text-xl text-center p-2"
          placeholder="Minimum Order Quantity"
          type="number"
          {...register("minimum", { required: true })}
        />
        <input
          className="block mx-auto bg-sky-500 px-5 py-3 mt-10 mb-5 rounded-md hover:bg-slate-700 hover:text-white md:w-36 border-none text-black md:font-semibold "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
