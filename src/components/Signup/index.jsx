import React, { useState } from "react";

import Register from "./Register";
import VerifyOtp from "./VerifyOtp";
import SignUp from "./SignUp";

function Login() {
  const [contactNumber, setContactNumber] = useState(null);
  const [path, setPath] = useState("signUp");

  const component = (
    <>
      {path === "signUp" && (
        <SignUp setPath={setPath} setContactNumber={setContactNumber} />
      )}
      {path === "verifyOtp" && (
        <VerifyOtp contactNumber={contactNumber} setPath={setPath} />
      )}
      {path === "register" && <Register contactNumber={contactNumber} />}
    </>
  );

  return <>{ component }</>;
}
export default Login;
