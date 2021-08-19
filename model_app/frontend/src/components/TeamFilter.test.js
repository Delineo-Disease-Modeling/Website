import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TeamFilter from "./TeamFilter"

// fireEvent
test("'Fullstack' item on Meet the Team nav bar works", () => {
    const { getByText, getAllByRole, getAllByText } = render(<TeamFilter />);
  
    const button = getAllByRole('button').filter(button => button.textContent === 'Fullstack')

    // Simulate clicking Fullstack button
    fireEvent.click(button[0]);
  
    // Make assertion
    getByText("Members of the fullstack team work throughout the stack. Our web application is built using the MERN stack (MongoDB, Express, ReactJS, NodeJS) and Unity Webgl. Members of this team also manage and access our geolocation data.");
    
  });