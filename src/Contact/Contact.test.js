import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders Contact Correctly", () => {

    const { container } = render(
        <BrowserRouter>
            <Contact />
        </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
});