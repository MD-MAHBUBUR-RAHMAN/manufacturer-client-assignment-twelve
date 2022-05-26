import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [users, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-center text-xl md:text-4xl font-semibold text-slate-900 my-5">
        {users?.displayName}
      </h3>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-24 mx-auto rounded-full">
            <img src={users?.photoURL} alt="" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{users?.email}</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
