import React, { MouseEventHandler } from "react";
import "./Button.scss";

interface ButtonProps {
  table?: boolean;
  text: string;
  onClick?: MouseEventHandler;
}
export default function Button({ text, onClick, table }: ButtonProps) {
  return (
    <button
      className={`button ${table ? "button--table" : ""}`}
      onClick={onClick}>
      {text}
    </button>
  );
}
