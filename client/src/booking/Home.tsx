import React, { useState, useEffect } from "react";
import { getallHotels } from "../actions/hotel";
import {allHotels} from "../types"

 import { SmallCard } from "../components/cards";

const Home: React.FC = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    let res = await getallHotels();
    setHotels(res.data);
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>All Hotels</h1>
      </div>
      <div className="container-fluid">
        <br/>
        {/* <pre>{JSON.stringify(hotels,null,4)}</pre> */}
        {hotels.map((h:allHotels, i) => (
          
          <SmallCard key={h._id} h={h} owner={false} showViewMoreButton={false} />
        ))}
      </div>
    </>
  );
};

export default Home;
