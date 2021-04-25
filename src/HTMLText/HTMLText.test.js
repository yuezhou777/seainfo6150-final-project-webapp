import React from 'react'
import {render} from "@testing-library/react";
import HTMLText from "./HTMLText";

describe('HTMLText test', () => {

    it('render successfully ', () => {

        const text = '<p>hello</p><p>world</p>';

        const {container} = render(<HTMLText content={text} />);
        
        expect(container).toMatchSnapshot();
    });

})