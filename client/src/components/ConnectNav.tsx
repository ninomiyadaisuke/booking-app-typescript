import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Avatar, Badge } from "antd";
import moment from "moment";
import { userAuth, balance } from "../types";
import {
  getAccountBalance,
  currencyFormatter,
  payoutSetting,
} from "../actions/stripe";
import { SettingOutlined } from "@ant-design/icons";
import {toast} from "react-toastify"

const { Meta } = Card;
const { Ribbon } = Badge;

const ConnectNav: React.FC = () => {
  const [loading, setLoading] = useState(false)
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

  const handlePayoutSettings = async() => {
    setLoading(true)
    try {
      const res = await payoutSetting(auth.token)
      //console.log("RES FOR PAYOUT SETTING LINK",res);
      window.location.href = res.data.url
      setLoading(false)
    }catch (err) {
      console.log(err);
      setLoading(false)
      toast.error("Unable to access settings. Try again")
      
    }
  }

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
            <Ribbon text="Payouts" color="silver">
              <Card
                onClick={handlePayoutSettings}
                className="bg-light pointer"
              >
                <SettingOutlined className="h5 pt-2" />
              </Card>
            </Ribbon>
          </>
        )}
    </div>
  );
};

export default ConnectNav;
