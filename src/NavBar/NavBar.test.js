import React from 'react'
import {render} from "@testing-library/react";
import NavBar from "./NavBar.jsx";
import { BrowserRouter } from 'react-router-dom';

describe('test nav bar', () => {
    it('render NavBar successfully',  () => {
        const {container} = render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        expect(container).toMatchSnapshot();
    });
});