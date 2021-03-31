import React from "react";
import { DashboardNav } from "../components";

const DashboardSeller: React.FC = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <h1>Dashboard</h1>
      </div>
      <div className="conatainer p-4">
        <DashboardNav />
      </div>
      <div className="container">
        <p>Show all hotels have posted and a button ton add new</p>
      </div>
    </>
  );
};

export default DashboardSeller;
