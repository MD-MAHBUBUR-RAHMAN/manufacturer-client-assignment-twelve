import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageAllOrder = () => {
  const url = `http://localhost:5000/orders`;
  const { data: allOrders, isLoading } = useQuery("allOrders", () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
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
                <td>{order.orderQuantity} units</td>
                <td>
                  <button className="btn btn-xs md:btn-sm">Delet</button>{" "}
                </td>
                <td>
                  <button className="btn btn-xs md:btn-sm">Shift</button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;
