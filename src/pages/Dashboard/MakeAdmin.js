import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const MakeAdmin = () => {
  const url = `http://localhost:5000/user`;
  const { data: allusers, isLoading } = useQuery("allusers", () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
        Make Admin Users
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-xs md:btn-sm">Admin</button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
