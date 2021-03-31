import React, { useState } from "react";
import { login } from "../actions/auth";
import { toast } from "react-toastify";
import { LoginForm } from "../components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("test@test.com");
  const [password, setPassword] = useState<string>("123456");

  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA", { email, password });
    try {
      let res = await login({ email, password });

      if (res.data) {
        console.log(
          "SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===>"
        );
        // console.log(res.data);
        //save user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        //save user and token to redux
        // console.log(res.data);

        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        history.push("/dashboard");
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
