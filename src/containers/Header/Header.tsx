import React, { MouseEventHandler } from "react";
import { Button, Name } from "src/components";
import { useAppSelector } from "src/hooks";
import "./Header.scss";

interface Props {
  handleClick: MouseEventHandler;
}
const Header: React.FC<Props> = ({ handleClick }): JSX.Element => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className="header">
      <Name name={`${user?.first_name} ${user?.last_name}`} />
      <Button text="New Order" onClick={handleClick} />
    </div>
  );
};

export default Header;
