import React from "react";
import { Card } from "src/components";
import { useAppSelector } from "src/hooks";
import "./Activity.scss";

const Activity: React.FC = (): JSX.Element => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="activity">
      <div className="activity__title">
        <span>{"90-DAY COMMUNICATION ACTIVITY"}</span>
      </div>
      <div className="activity__box">
        {Object.keys(user?.activity ?? {}).map((activityKey) => {
          return (
            <Card
              grow
              key={activityKey}
              color="zumthor"
              size="s"
              height
              footerBackground
              footer={activityKey}>
              <span className="activity__content">
                {user?.activity[activityKey as keyof typeof user.activity]}
              </span>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Activity;
