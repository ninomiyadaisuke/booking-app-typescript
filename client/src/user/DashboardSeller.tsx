import React from "react";
import { DashboardNav } from "../components";
import { ConnectNav } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userAuth } from "../types";

const DashboardSeller: React.FC = () => {
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;

  const connected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <h2>Connect with stripe</h2>
        </div>
        <div className="col-md-2">
          <Link to="/hotels/new" className="btn btn-primary">
            + Add New
          </Link>
        </div>
      </div>
    </div>
  );

  const notConnected = () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <h2>Connect with stripe</h2>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>
      <div className="conatainer p-4">
        <DashboardNav />
      </div>
      {auth && auth.user ? connected() : notConnected()}
      {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
    </>
  );
};

export default DashboardSeller;
