import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Button from "./Button";

test("Button Test", async () => {
  const execOnClick = jest.fn();
  render(<Button text="Hello" onClick={execOnClick} />);
  const element = screen.getByRole("button");
  await userEvent.click(element);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello");
  expect(element).toHaveClass("button");
  expect(execOnClick).toBeCalled();
});
