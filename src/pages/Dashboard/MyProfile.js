import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [users, loading] = useAuthState(auth);
  console.log(users);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-center text-primary">My Profile</h3>
    </div>
  );
};

export default MyProfile;
