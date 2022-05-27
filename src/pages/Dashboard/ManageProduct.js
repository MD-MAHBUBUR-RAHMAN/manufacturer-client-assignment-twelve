import React from "react";
import { toast } from "react-toastify";
import useProducts from "../Hooks/useProducts";

const ManageProduct = () => {
  const [products] = useProducts([]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://powerful-dawn-82606.herokuapp.com/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Product Deleted Successfully");
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
        Manage All Products
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Remove Product</th>
              {/* <th>Update Quantity</th> */}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 md:w-24 rounded-full">
                      <img src={product.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.name}</td>
                <td>{product.quantity} units</td>
                <td>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-xs md:btn-sm"
                  >
                    Delet
                  </button>
                </td>
                {/* <td>
                  <button className="btn btn-xs md:btn-sm">pay</button>{" "}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
