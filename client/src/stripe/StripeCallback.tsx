import React, { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const StripeCallback: React.FC = () => {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center p-5">
      <LoadingOutlined className="display-1 p-5 text-danger" />
    </div>
  );
};

export default StripeCallback;
