import React from "react";
import { currencyFormatter } from "../../actions/stripe";
import { allHotelsProps } from "../../types";
import { diffDays } from "../../actions/hotel";
import { Link, useHistory } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const SmallCard: React.FC<allHotelsProps> = ({
  h,
  // handleHotelDelete = (f) => f,
  owner,
  showViewMoreButton = true,
}) => {
  const history = useHistory();
  // const owner = false;
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          {h.image && h.image.contentType ? (
            <img
              src={`${process.env.REACT_APP_API}/hotel/image/${h._id}`}
              alt="default hotel image"
              className="card-image img img-fluid"
            />
          ) : (
            <img
              src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
              alt="default hotel image"
              className="card-image img img-fluid"
            />
          )}
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
            <p className="card-text">
              <span className="float-right text-primary">
                for {diffDays(h.from, h.to)}{" "}
                {diffDays(h.from, h.to) <= 1 ? "day" : "days"}
              </span>
            </p>
            <p className="card-text">{h.bed} bed</p>
            <p className="card-text">
              Available from {new Date(h.from).toLocaleDateString()}
            </p>

            <div className="d-flex justify-content-between h4">
              {showViewMoreButton &&(
                <button
                  onClick={() => history.push(`/hotel/${h._id}`)}
                  className="btn btn-primary"
                >
                  Show more
                </button>
              )}

              {owner && (
                <>
                  <Link to={`/hotel/edit/${h._id}`}>
                    <EditOutlined className="text-warning " />
                  </Link>
                  <Link to={`/hotel/edit/${h._id}`}>
                    <DeleteOutlined
                      // onClick={() => handleHotelDelete(h._id)}
                      className="text-danger "
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
