import React from 'react'
import {render} from "@testing-library/react";
import Error from "./Error";
import { BrowserRouter } from 'react-router-dom';

it("renders Error Correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
});