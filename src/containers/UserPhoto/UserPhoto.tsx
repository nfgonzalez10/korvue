import moment from "moment";
import React from "react";
import { Card } from "src/components";
import { useAppSelector } from "src/hooks";
import "./UserPhoto.scss";

const UserPhoto: React.FC = (): JSX.Element => {
  const user = useAppSelector((state) => state.user.user);
  const years = moment().diff(user?.birth_date, "years");
  const footer = `${user?.gender} - ${years}`;
  return (
    <Card color="zumthor" size="xs" footer={footer} grow>
      <i className="fal fa-user userPhoto"></i>
    </Card>
  );
};

export default UserPhoto;
