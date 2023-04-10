import moment from "moment";
import React from "react";
import { Card } from "src/components";
import { useAppSelector } from "src/hooks";
import "./CarrierStatus.scss";

const CarrierStatus: React.FC = (): JSX.Element => {
  const carrierStatus = useAppSelector(
    (state) => state.user.user?.carrier_status
  );
  const date = moment(carrierStatus?.since).format("MMM DD, YYYY");

  return (
    <Card
      grow
      color="green"
      size="m"
      footerBackground
      footer={`Since ${date}`}
      title="SMS CARRIER STATUS">
      <div className="status">{carrierStatus?.status}</div>
    </Card>
  );
};

export default CarrierStatus;
