import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import Home from "./Home";
import HomeCarousel from "../components/Carousel";
import BlogCarousel from "../containers/BlogCarousel";
import DevBlogData from "../const/devblogposts";

configure({ adapter: new Adapter() });

//Rendering of Carousel
describe("Home page", () => {
  //check Title of the page is displaying correctly
  it("Displays title of the Home page", () => {
    const { getByText } = render(<Home />);
    const title = getByText("Interactive Disease Simulation");
    expect(title).toBeInTheDocument();
  });

  // check to see if Home Carousel renders correctly
  it("Home Carousel renders correctly", () => {
    shallow(<HomeCarousel />);
  });

  // check to see if Blog Carousel renders correctly
  it("Blog Carousel renders correctly", () => {
    shallow(<BlogCarousel />);
  });

  // check to see if Join Team section renders correctly
  it("Join team renders correctly", () => {
    const { getByText } = render(<Home />);
    const title = getByText("We Are Delineo");
    expect(title).toBeInTheDocument();
  });

  // check for default display of about carousel
  it("carousel only display simulator information", () => {
    const { getByText } = render(<HomeCarousel />);
    const title = getByText("Simulator");
    expect(title).toBeInTheDocument();
  });

  // check for default display of dev blog
  it("carousel only display first blogposts", () => {
    const { getByText } = render(<BlogCarousel />);

    for (const i of DevBlogData) {
      if (i.id === 1) {
        const title = getByText(i.title);
        const subtext = getByText(i.subtext);
        expect(title).toBeInTheDocument();
        expect(subtext).toBeInTheDocument();
      } else {
        expect(() => getByText(i.title)).toThrow();
        expect(() => getByText(i.subtext)).toThrow();
      }
    }
  });

  it("check whether button opens the button opens the simulations page", () => {
    const { getByText } = render(<HomeCarousel />);
    const title = getByText(
      "Bringing a fresh approach to the challenge of modeling disease spread"
    );
    expect(title).toBeInTheDocument();
  });
});
