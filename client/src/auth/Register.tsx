import React, { useState } from "react";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    alert("send user info to backend");
  };


  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      show the form <button type="submit">Submit</button>{" "}
    </form>
  );

  return (
    <form>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">{registerForm()}</div>
        </div>
      </div>
    </form>
  );
};

export default Register;
