import React from "react";
// import {expect} from "@testing-library/jest-dom";
import { fetchData } from "./api";

test("Received data", async () => {
  const data = await fetchData("2022-01-23");
  expect(data).toStrictEqual({
    date: "2022-01-23",
    explanation:
      "Seen from ice moon Tethys, rings and shadows would display fantastic views of the Saturnian system. Haven't dropped in on Tethys lately? Then this gorgeous ringscape from the Cassini spacecraft will have to do for now. Caught in sunlight just below and left of picture center in 2005, Tethys itself is about 1,000 kilometers in diameter and orbits not quite five saturn-radii from the center of the gas giant planet. At that distance (around 300,000 kilometers) it is well outside Saturn's main bright rings, but Tethys is still one of five major moons that find themselves within the boundaries of the faint and tenuous outer E ring. Discovered in the 1980s, two very small moons Telesto and Calypso are locked in stable along Tethys' orbit. Telesto precedes and Calypso follows Tethys as the trio circles Saturn.",
    hdurl:
      "https://apod.nasa.gov/apod/image/2201/TethysRingShadow_cassini_1080.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Saturn, Tethys, Rings, and Shadows",
    url: "https://apod.nasa.gov/apod/image/2201/TethysRingShadow_cassini_1080.jpg",
  });
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
