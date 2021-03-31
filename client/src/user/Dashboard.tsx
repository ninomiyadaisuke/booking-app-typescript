import React from "react";
import { DashboardNav } from "../components";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <h1>Dashboard</h1>
      </div>
      <div className="conatainer p-4">
        <DashboardNav />
      </div>
      <div className="container">
        <p>Show all booking and a button to browse hotels</p>
      </div>
    </>
  );
};

export default Dashboard;
