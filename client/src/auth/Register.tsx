import React, { useState } from "react";
import { RegisterForm } from "../components";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { register } from "../actions/auth";

const Register: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await register({
        name,
        email,
        password,
      })
      console.log("REGISTER USER ===> ", res);
      toast.success("Register success. Pleage login.");
      history.push("/login");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
