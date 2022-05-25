import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <h2 className="text-center text-primary text-xl md:text-5xl text-bold mt-5">
          Welcome To DashBoard
        </h2>
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 md:w-60   text-white text-lg font-semibold bg-slate-500">
          {/* <!-- Sidebar content here --> */}
          <li className="mb-2">
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/addreview">Add Review</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/myprofile">MY Profile</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/manageorder">Manage Order</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/addproduct">Add Product</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/makeadmin">Make Admin</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard/manageproduct">Manage Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
