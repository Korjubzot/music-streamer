import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { BrowserRouter } from "react-router-dom";
import Player from "./player";

describe("Player", () => {
  test("renders player component", () => {
    render(
      <BrowserRouter>
        <Player />
      </BrowserRouter>
    );

    const playerElement = screen.getByTestId("player");
    expect(playerElement).toBeInTheDocument();
  });

  test("renders correct amount of buttons buttons", () => {
    render(
      <BrowserRouter>
        <Player />
      </BrowserRouter>
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("confirms button press", () => {
    const playSpy = jest.spyOn(console, "log");

    render(
      <BrowserRouter>
        <Player />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Play" });
    act(() => {
      button.click();
    });
    expect(playSpy).toHaveBeenCalledWith("Play");
    playSpy.mockRestore();
  });

  test("confirms forward button press", () => {
    const forwardSpy = jest.spyOn(console, "log");

    render(
      <BrowserRouter>
        <Player />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Forward" });
    act(() => {
      button.click();
    });
    expect(forwardSpy).toHaveBeenCalledWith("Track forward");
    forwardSpy.mockRestore();
  });

  test("confirms backward button press", () => {
    const backwardSpy = jest.spyOn(console, "log");

    render(
      <BrowserRouter>
        <Player />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Backward" });
    act(() => {
      button.click();
    });
    expect(backwardSpy).toHaveBeenCalledWith("Track backward");
    backwardSpy.mockRestore();
  });
});
