import React from "react";
import "./Card.scss";

interface Props {
  title?: Partial<string>;
  color: "green" | "zumthor";
  size: "xs" | "s" | "m" | "l";
  footer?: Partial<string>;
  footerBackground?: boolean;
  height?: boolean;
  grow?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}
const Card: React.FC<Props> = ({
  title,
  footer,
  color,
  size,
  footerBackground,
  height,
  grow,
  children,
}): JSX.Element => {
  return (
    <div
      className={`card card--${color} card__size--${size} ${
        height ? "card--height" : ""
      } ${grow ? "card--grow" : ""}`}>
      {title && <div className="card__title">{title}</div>}
      {children}
      {footer && (
        <div
          className={`card__footer ${
            footerBackground && "card__footer--background"
          }`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
