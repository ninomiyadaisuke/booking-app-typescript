import React from "react";
import { DashboardNav } from "../components";
import { ConnectNav } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userAuth } from "../types";
import { HomeOutlined } from "@ant-design/icons";

const DashboardSeller: React.FC = () => {
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;
  const test:string = "test"

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
        <div className="col-md-6 offset-md-3 text-center">
          <div className="p-5 pointer">
            <HomeOutlined className="h1" />
            <h2>Setup payouts to post hotel rooms</h2>
            <p className="lead">
              MERN partners with stripe to transfer earnings to your bank
              account
            </p>
            <button className="btn btn-primary mb-3">
              Setup Payouts
            </button>
            <p className="text-muted">
              You will be redirected to Stripe to complete the onboarding process.
            </p>
          </div>
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
      {auth && auth.user && !test ? connected() : notConnected()}
      {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
    </>
  );
};

export default DashboardSeller;
