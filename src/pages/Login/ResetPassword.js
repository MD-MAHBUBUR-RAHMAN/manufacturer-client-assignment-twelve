import React, { useRef } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ResetPassword = () => {
  const emailRef = useRef("");
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  // password Reset:-----------
  const passwordReset = async () => {
    const email = emailRef.current.value;
    console.log(email);
    if (email) {
      await sendPasswordResetEmail(email);
      alert("Check Your Email please");
    } else {
      alert("Write your Email please");
    }
  };
  return (
    <div className="border p-5 rounded-lg mx-2 md:w-1/2 md:mx-auto md:mt-40 bg-slate-400">
      <form onSubmit={passwordReset}>
        <input
          className="shadow block my-10 rounded-lg w-full md:text-xl text-center p-2"
          type="email"
          ref={emailRef}
          id="email"
          //   required
          placeholder="Write Your Email"
        />
        <input
          className="bg-slate-700 hover:bg-sky-700 cursor-pointer block w-1/4 p-2 mx-auto my-10 md:first-line:text-2xl text-white rounded-md"
          type="submit"
          value="Reset"
        />
      </form>
    </div>
  );
};

export default ResetPassword;
