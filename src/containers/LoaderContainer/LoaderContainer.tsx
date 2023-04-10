import React from "react";
import { Loader } from "src/components";
import "./LoaderContainer.scss";

interface ILoaderContainer {
  close: () => void;
}
const LoaderContainer: React.FC<ILoaderContainer> = ({ close }) => {
  return (
    <div className="loaderContainer">
      <i className="fal fa-times loaderContainer__close" onClick={close}></i>
      <div className="loaderContainer__loader">
        <Loader circle />
        <span className="loaderContainer__loader--text">Processing</span>
      </div>
    </div>
  );
};

export default LoaderContainer;
