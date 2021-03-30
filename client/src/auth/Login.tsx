import React, { useState } from "react";
import { login } from "../actions/auth";
import { toast } from "react-toastify";
import { LoginForm } from "../components";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
