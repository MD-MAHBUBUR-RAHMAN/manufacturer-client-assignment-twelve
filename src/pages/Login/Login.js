import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <h2 className="text-center text-primary">LogIn Please</h2>
      <button onClick={() => signInWithGoogle()} className="btn btn-outline">
        Continue With Google
      </button>
    </div>
  );
};

export default Login;
