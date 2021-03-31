import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../types";
import { useHistory } from "react-router-dom";

const TopNav: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div className="nav bg-light d-flex justify-content-between">
      <Link className="nav-link" to="/">
        Home
      </Link>
      {auth !== null && (
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      )}
      {auth !== null && (
        <a className="nav-link pointer" onClick={logout}>
          Logout
        </a>
      )}
      {auth === null && (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default TopNav;
