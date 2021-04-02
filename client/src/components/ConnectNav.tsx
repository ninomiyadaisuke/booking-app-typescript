import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import moment from "moment";
import { userAuth } from "../types";
import { getAccountBalance } from "../actions/stripe";

const { Meta } = Card;

const ConnectNav: React.FC = () => {
  const [balance, setBalance] = useState<number>(0)
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;
  const user = auth.user;

  useEffect(() => {
    getAccountBalance(auth.token).then((res) => {
      // console.log(res);
      setBalance(res.data)
    });
  }, []);

  return (
    <div className="d-flex justify-content-around">
      <Card>
        <Meta
          avatar={<Avatar>{user.name[0]}</Avatar>}
          title={user.name}
          description={`Joined ${moment(user.updatedAt).fromNow()}`}
        />
      </Card>
      {auth &&
        auth.user &&
        auth.user.stripe_seller &&
        auth.user.stripe_seller.charges_enabled && (
          <>
            <div>Pending balance</div>
            <div>Payout settings</div>
          </>
        )}
    </div>
  );
};

export default ConnectNav;
