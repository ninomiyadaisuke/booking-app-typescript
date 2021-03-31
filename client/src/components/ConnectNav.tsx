import React from "react";
import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import moment from "moment";
import { userAuth } from "../types";

const { Meta } = Card;

const ConnectNav: React.FC = () => {
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;
  const user = auth.user;
  return (
    <div className="d-flex justify-content-around">
      <Card>
        <Meta
          avatar={<Avatar>{user.name[0]}</Avatar>}
          title={user.name}
          description={`Joined ${moment(user.updatedAt).fromNow()}`}
        />
      </Card>
      {auth && auth.user && (
        <>
          <div>Pending balance</div>
          <div>Payout settings</div>
        </>
      )}
    </div>
  );
};

export default ConnectNav;
