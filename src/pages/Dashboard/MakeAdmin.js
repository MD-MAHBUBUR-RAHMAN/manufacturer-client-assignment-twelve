import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const MakeAdmin = () => {
  const url = `http://localhost:5000/user`;
  const {
    data: allusers,
    isLoading,
    refetch,
  } = useQuery("allusers", () =>
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const createAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("fail To Make An Admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.result?.modifiedCount > 0) {
          refetch();
          toast.success("Successfully Made An Admin");
        }
      });
  };

  return (
    <div>
      <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
        Make Users Admin
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
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => {
                        createAdmin(user.email);
                      }}
                      className="btn btn-xs md:btn-sm"
                    >
                      Admin
                    </button>
                  )}
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
