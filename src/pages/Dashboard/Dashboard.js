import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer-content flex flex-col items-end">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <h2 className="text-center text-primary">Welcome To DashBoard</h2>
      <Outlet></Outlet>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/addreview">Add Review</Link>
            </li>
            <li>
              <Link to="/dashboard/myprofile">MY Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/manageorder">Manage Order</Link>
            </li>
            <li>
              <Link to="/dashboard/addproduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/makeadmin">Make Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/manageproduct">Manage Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
