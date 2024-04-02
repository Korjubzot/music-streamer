import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BrowserRouter } from "react-router-dom";
import AlbumData from "./albumData";

describe("Album data", () => {
  test("renders album data component with mock data", async () => {
    const mock = new MockAdapter(axios);
    const mockData = [
      { id: 1, title: "Album 1", artist: "Artist 1", release_year: 2020 },
    ];

    mock.onGet("http://localhost:5001/albums").reply(200, mockData);
    render(
      <BrowserRouter>
        <AlbumData />
      </BrowserRouter>
    );

    await screen.findByText("Album 1");

    expect(screen.getByText("Album 1")).toBeInTheDocument();
  });
});
