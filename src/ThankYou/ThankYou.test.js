import React from "react";
import { render } from "@testing-library/react";
import Thankyou from "./Thankyou.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders Thankyou Correctly", () => {

    const { container } = render(
        <BrowserRouter>
            <Thankyou />
        </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
});