import React from "react";
import { DashboardNav } from "../components";
import { ConnectNav } from "../components";
import { Link } from "react-router-dom";

const DashboardSeller: React.FC = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>
      <div className="conatainer p-4">
        <DashboardNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Your Bookings</h2>
          </div>
          <div className="col-md-2">
            <Link to="/hotels/new" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSeller;
