import React from "react";
import { render, fireEvent } from "@testing-library/react";
import faqData from '../const/faqData';

import About from "./About"

test("FAQ section works", () => {
    
    const { getByText, getAllByRole, queryByText } = render(<About />);

    // Loop over all FAQs
    for (const i of faqData) {
        // Retrieve clickable FAQ and the expandable panel
        const button = getByText(i.question);
        const panel = queryByText(i.answer);

        // Assert the accordian is collapsed
        expect(button).toBeInTheDocument();
        expect(panel).not.toBeVisible();

        // Simulate opening the accordian
        fireEvent.click(button);

        // Assert the accordian is open
        expect(panel).toBeVisible();
    }

  });