import React from 'react'
import {render} from "@testing-library/react";
import Form from "./Form.jsx";

describe('form test', () => {

    it('render Form successfully ', () => {
        const {container} = render(<Form />);

        expect(container).toMatchSnapshot();
    });

})