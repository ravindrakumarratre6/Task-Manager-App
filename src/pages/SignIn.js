import "../styles/Signin.css";

import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((val) => console.log("Sign In Successfully"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="Sign-in">
      <h1 className="Sign-in-heading">Sign in</h1>
      <label>Enter Your Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        required
      />
      <label>Enter Your Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
        required
      />
      <button onClick={signin}>Sign In</button>
    </div>
  );
};

export default SignIn;
