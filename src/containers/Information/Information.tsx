import React from "react";
import "./Information.scss";
import { UserCard } from "../UserCard";
import { CarrierStatus } from "../CarrierStatus";
import { UserPhoto } from "../UserPhoto";
import { Activity } from "../Activity";

const Information: React.FC = (): JSX.Element => {
  return (
    <div className="information">
      <UserPhoto />
      <UserCard />
      <Activity />
      <CarrierStatus />
    </div>
  );
};

export default Information;
