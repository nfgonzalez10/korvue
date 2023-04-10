import React from "react";
import "./Name.scss";

interface Props {
  name: string;
}

const Name: React.FC<Props> = ({ name }): JSX.Element => {
  return (
    <div className="name">
      <i className="fal fa-star name__icon"></i>
      <span className="name__span">{name}</span>
    </div>
  );
};

export default Name;
