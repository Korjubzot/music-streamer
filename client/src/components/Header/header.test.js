import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header";

describe("Header", () => {
  test("renders header component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });
});
