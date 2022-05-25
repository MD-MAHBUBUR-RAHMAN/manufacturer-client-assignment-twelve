import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // // console.log(data);
    // const url = `https://frozen-crag-58968.herokuapp.com/product`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     reset();
    //   });
    console.log(data);
  };
  return (
    <div>
      <h3 className="text-center text-primary">Add Product</h3>
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
          className="block mx-auto bg-slate-700 px-5 py-3 mt-10 mb-5 rounded-md hover:text-blue-400 md:w-36 border-none text-red-400 md:font-semibold "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
