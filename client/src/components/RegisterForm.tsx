import React from "react";
import { formProps } from "../types";

const RegisterForm: React.FC<formProps> = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="form-group">
      <label className="form-label mb-3">Your name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">Email address</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button disabled={!name || !email || !password} className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default RegisterForm;
