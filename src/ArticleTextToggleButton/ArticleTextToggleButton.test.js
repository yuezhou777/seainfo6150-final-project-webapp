import React from 'react'
import {render} from "@testing-library/react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe('button test', () => {

    it('render ArticleTextToggleButton successfully ', () => {
        const onClick = jest.fn();

        const { container } = render(<ArticleTextToggleButton buttonText={"Show more"} onClick={onClick}/>);
        
        expect(container).toMatchSnapshot();
    });

})