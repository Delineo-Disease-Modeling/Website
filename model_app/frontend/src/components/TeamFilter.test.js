import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TeamFilter from "./TeamFilter";

test("'Fullstack' item on Meet the Team nav bar works", () => {
  const { getByText, getAllByRole } = render(<TeamFilter />);

  //Retrieve Fullstack button
  const button = getAllByRole("button").filter(
    (button) => button.textContent === "Fullstack"
  );

  // Simulate clicking Fullstack button
  fireEvent.click(button[0]);

  // Make assertion
  getByText(
    "Members of the fullstack team work throughout the stack. Our web application is built using the MERN stack (MongoDB, Express, ReactJS, NodeJS) and Unity Webgl. Members of this team also manage and access our geolocation data."
  );
});

test("'Simulation' item on Meet the Team nav bar works", () => {
  const { getByText, getAllByRole } = render(<TeamFilter />);

  //Retrieve Simulation button
  const button = getAllByRole("button").filter(
    (button) => button.textContent === "Simulation"
  );

  // Simulate clicking Simulation button
  fireEvent.click(button[0]);

  // Make assertion
  getByText(
    "The simulation team is responsible for the implementation of the simulation that lies at the heart of the Delineo project. Team members focus on programming the various modules, algorithms, and statistical drivers that are utilized in our models."
  );
});

test("'Machine Learning' item on Meet the Team nav bar works", () => {
  const { getByText, getAllByRole } = render(<TeamFilter />);

  //Retrieve Machine Learning button
  const button = getAllByRole("button").filter(
    (button) => button.textContent === "Machine Learning"
  );

  // Simulate clicking Machine Learning button
  fireEvent.click(button[0]);

  // Make assertion
  getByText(
    "The machine learning group is tackling the challenge of learning from the massive amounts of geolocation data the Delineo project has access to. One of the main focuses is on developing machine learning models that are capable of discerning and generating population movement patterns within communities ranging from rural towns to urban cities."
  );
});

test("'Information Support' item on Meet the Team nav bar works", () => {
  const { getByText, getAllByRole } = render(<TeamFilter />);

  //Retrieve Information Support button
  const button = getAllByRole("button").filter(
    (button) => button.textContent === "Information Support"
  );

  // Simulate clicking Information Support button
  fireEvent.click(button[0]);

  // Make assertion
  getByText(
    "The information support team is responsible for gathering, summarizing, and disseminating research articles/papers that prove helpful for informing the development of Delineo's model."
  );
});

test("'All' item on Meet the Team nav bar works", () => {
  const { getByText, getAllByRole, queryByText } = render(<TeamFilter />);

  //Retrieve Fullstack button
  const fButton = getAllByRole("button").filter(
    (button) => button.textContent === "Fullstack"
  );

  // Simulate clicking Fullstack button
  fireEvent.click(fButton[0]);

  // Ensure we are no longer on the "All" section
  expect(queryByText("Team Leaders")).toBeNull();

  //Retrieve All button
  const aButton = getAllByRole("button").filter(
    (button) => button.textContent === "All"
  );

  // Simulate clicking Fullstack button
  fireEvent.click(aButton[0]);

  // Make Assertion
  getByText("Team Leaders");
});
