import React, { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userAuth } from "../types";
import { getAccountStatus } from "../actions/stripe";

const StripeCallback: React.FC = () => {
  const history = useHistory();
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth && auth.token) accountStatus();
  }, [auth]);

  const accountStatus = async () => {
    try {
      const res = await getAccountStatus(auth.token);
      console.log("user account status on stripe callback", res);
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center p-5">
      <LoadingOutlined className="display-1 p-5 text-danger" />
    </div>
  );
};

export default StripeCallback;
