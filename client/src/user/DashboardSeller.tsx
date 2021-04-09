import React, { useState, useEffect } from "react";
import { DashboardNav } from "../components";
import { ConnectNav } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userAuth } from "../types";
import { HomeOutlined } from "@ant-design/icons";
import { createConnectAccount } from "../actions/stripe";
import { toast } from "react-toastify";
import { sellerHotels } from "../actions/hotel";
import { SmallCard } from "../components/cards";

const DashboardSeller: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;
  const user = auth.user;

  useEffect(() => {
    loadSellersHotels();
  }, []);

  const loadSellersHotels = async () => {
    let { data } = await sellerHotels(auth.token);
    setHotels(data);
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      let res = await createConnectAccount(auth.token);
      console.log(res);
      window.location.href = res.data;
    } catch (err) {
      console.log(err);
      toast.error("Stripe connect failed, Try again.");
      setLoading(false);
    }
  };

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
      <div className="row">
        {hotels.map(h => <SmallCard  h={h} showViewMoreButton={false} owner={true}/>)}
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
            <button
              disabled={loading}
              onClick={handleClick}
              className="btn btn-primary mb-3"
            >
              {loading ? "Processing..." : "Setup Payouts"}
            </button>
            <p className="text-muted">
              You will be redirected to Stripe to complete the onboarding
              process.
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
      {auth &&
      auth.user &&
      auth.user.stripe_seller &&
      auth.user.stripe_seller.charges_enabled
        ? connected()
        : notConnected()}
      {/* <pre>{JSON.stringify(auth,null,4)}</pre> */}
    </>
  );
};

export default DashboardSeller;
