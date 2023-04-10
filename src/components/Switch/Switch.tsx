import React, { MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { executeSwitch } from "src/reducers";
import "./Switch.scss";

interface ISwitch {
  keyValue: string;
  selected: boolean;
  label: string;
  onclickSwitch: MouseEventHandler<HTMLButtonElement>;
}

const SwitchButton: React.FC<ISwitch> = ({
  selected,
  keyValue,
  onclickSwitch,
  label,
}) => {
  return (
    <button
      className={`switch__button ${selected ? "switch__button--white" : ""}`}
      value={keyValue}
      onClick={onclickSwitch}>
      {label}
    </button>
  );
};

const Switch: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.switch.currentValue);
  const switchExec = (newValue: string) => {
    dispatch(
      executeSwitch({
        currentValue: newValue === "sent" ? "sent" : "errors",
        pending: true,
      })
    );
  };
  return (
    <div className="switch">
      <SwitchButton
        keyValue="sent"
        selected={value === "sent"}
        onclickSwitch={() => switchExec("sent")}
        label={"sent"}
      />
      <SwitchButton
        label={"errors"}
        keyValue="errors"
        selected={value === "errors"}
        onclickSwitch={() => switchExec("errors")}
      />
    </div>
  );
};

export default Switch;
