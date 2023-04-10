import React from "react";
import { Card } from "src/components";
import { useAppSelector } from "src/hooks";
import "./UserCard.scss";

enum iconUserInformation {
  id = "fa-user",
  mobile_phone = "fa-mobile",
  home_phone = "fa-house",
  work_phone = "fa-building",
  email = "fa-at",
}
const UserCard: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <Card color="zumthor" size="l" grow>
      <div className="userCard">
        {Object.keys(iconUserInformation)
          .filter((x) => !(parseInt(x) >= 0))
          .map((key: string, index) => {
            return (
              <div key={index} className={`userCard__grid`}>
                <i
                  className={`fal ${
                    iconUserInformation[key as keyof typeof iconUserInformation]
                  } userCard__icon`}></i>
                <span className="userCard__text">
                  {index === 0 ? "#" : ""}
                  {user?.[key as keyof typeof iconUserInformation]}
                </span>
              </div>
            );
          })}
      </div>
    </Card>
  );
};

export default UserCard;
