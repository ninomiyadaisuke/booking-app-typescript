import React from "react";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const user = useSelector((state) => ({ ...state }));
  return (
    <div className="container-fluid h1 p-5 text-center">
      Home page
    </div>
  );
};

export default Home;
