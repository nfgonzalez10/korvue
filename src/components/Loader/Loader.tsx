import React from "react";
import "./Loader.scss";

interface ILoader {
  circle?: boolean;
}
const Loader: React.FC<ILoader> = ({ circle }) => {
  const iconClass = circle
    ? "fal fa-circle-notch loader--circle"
    : "fa fa-ellipsis-h loader";
  return <i className={iconClass}></i>;
};

export default Loader;
