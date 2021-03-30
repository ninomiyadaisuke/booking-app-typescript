import React, { useState } from "react";
import { login } from "../actions/auth";
import { toast } from "react-toastify";
import { LoginForm } from "../components";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("test@test.com");
  const [password, setPassword] = useState<string>("123456");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA", {email, password});
    try {
      let res = await login({ email, password });

      if (res.data) {
        console.log(
          "SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===>"
        );
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Login</h1>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <LoginForm
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
