import React from "react";
import { allHotelsProps } from "../../types";


const SmallCard: React.FC<allHotelsProps> = (props) => {
  const {h} = props
  return <div>{JSON.stringify(props.h)}</div>;
};

export default SmallCard;
