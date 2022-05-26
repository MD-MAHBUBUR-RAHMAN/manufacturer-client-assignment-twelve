import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [users, loading] = useAuthState(auth);
  const email = users?.email;
  const url = `http://localhost:5000/orders/${email}`;
  const { data: orders, isLoading } = useQuery("Products", () =>
    fetch(url).then((res) => res.json())
  );

  if (loading || isLoading) {
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
                  <button className="btn btn-xs md:btn-sm">Delet</button>{" "}
                </td>
                <td>
                  <button className="btn btn-xs md:btn-sm">pay</button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
