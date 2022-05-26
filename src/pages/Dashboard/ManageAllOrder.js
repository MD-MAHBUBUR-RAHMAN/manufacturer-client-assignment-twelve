import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";

const ManageAllOrder = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);

  return (
    <div>
      <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
        Manage Order
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Total Order</th>
              <th>Remove Product</th>
              <th>Update Quantity</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 md:w-24 rounded-full">
                      <img src={order.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.orderQuantity} units</td>
                <td>
                  <label
                    onClick={() => setDeletingOrder(order)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-xs md:btn-sm"
                  >
                    Delete
                  </label>
                </td>
                <td>
                  <button className="btn btn-xs md:btn-sm">Shift</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteOrderModal
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
        />
      )}
    </div>
  );
};

export default ManageAllOrder;
