import "../styles/Signup.css"
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password).then((val) =>
      console.log("successfully SignUp")
    );
    setEmail("");
    setPassword("");
  };
  return (
    <div className="Sign-up">
      <h1 className="Sign-up-heading">SignUp Account</h1>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        required
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
        required
      />
      <button onClick={signup}>Sign Up</button>
    </div>
  );
};
export default SignUp;
