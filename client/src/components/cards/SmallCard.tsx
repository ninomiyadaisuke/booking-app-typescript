import React, { useEffect } from "react";
import { currencyFormatter } from "../../actions/stripe";
import { allHotelsProps } from "../../types";

const SmallCard: React.FC<allHotelsProps> = (props) => {
  const { h } = props;

  useEffect(() => {
    console.log(typeof h.price);
  });

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
            alt="default hotel image"
            className="card-image img img-fluid"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">
              {h.title}{" "}
              <span className="float-right text-primary">
                {currencyFormatter({
                  amount: h.price,
                  currency: "usd",
                })}
              </span>{" "}
            </h3>
            <p className="alert alert-info">{h.location}</p>
            <p className="card-text">{`${h.content.substring(1, 200)}...`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;