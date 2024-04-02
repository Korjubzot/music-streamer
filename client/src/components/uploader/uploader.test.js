import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Uploader from "./uploader";

describe("Uploader", () => {
  test("renders uploader component", () => {
    render(
      <BrowserRouter>
        <Uploader />
      </BrowserRouter>
    );

    const uploaderElement = screen.getByTestId("uploader");
    expect(uploaderElement).toBeInTheDocument();
  });
});
