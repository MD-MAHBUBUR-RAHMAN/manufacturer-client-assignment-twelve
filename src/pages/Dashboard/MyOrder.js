import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderModal from "./DeleteOrderModal";

const MyOrder = () => {
  const [users, loading] = useAuthState(auth);
  const email = users?.email;
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/orders/${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders, email]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
        Your Order
      </h3>
      <p className="text-center text-primary text-xl font-semibold mb-2 uppercase">
        <span className="text-slate-900">Name</span> : {users?.displayName}
      </p>
      <p className="text-center text-slate-900 text-lg font-semibold mb-5">
        Email : {email}
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Order</th>
              <th>Remove Order</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 md:w-24 rounded-full">
                      <img src={order.img} alt="" />
                    </div>
                  </div>
                </td>
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
                  <button className="btn btn-xs md:btn-sm">pay</button>
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

export default MyOrder;
