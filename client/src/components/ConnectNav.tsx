import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Avatar, Badge } from "antd";
import moment from "moment";
import { userAuth,balance } from "../types";
import { getAccountBalance } from "../actions/stripe";
import { currencyFormatter } from "../actions/stripe";


const { Meta } = Card;
const { Ribbon } = Badge;



const ConnectNav: React.FC = () => {
  const [balance, setBalance] = useState<balance>();
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;
  const user = auth.user;

  useEffect(() => {
    getAccountBalance(auth.token).then((res) => {
      console.log(res.data);
      setBalance(res.data);
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
            <Ribbon text="Avaliable" color="grey">
              <Card className="bg-light pt-1">
                {balance &&
                  balance.pending &&
                  balance.pending.map((bp, i) => (
                    <span key={i} className="lead">
                      {currencyFormatter(bp)}
                    </span>
                  ))}
              </Card>
            </Ribbon>
            <div>Payout settings</div>
          </>
        )}
    </div>
  );
};

export default ConnectNav;
