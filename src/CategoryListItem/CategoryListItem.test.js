import React from 'react'
import {render} from "@testing-library/react";
import CategoryListItem from "./CategoryListItem.jsx";
import { BrowserRouter } from 'react-router-dom';

describe('CategoryListItem test', () => {

    it('render CategoryListItem successfully ', () => {

        const category = 'Husky';
        const posts = [
            {
                "id":"1",
                "title":"Mel",
                "intro":"The only thing better than one adorable husky is an entire sled team of 'em. ",
                "content":"Mel is a gentle and sweet dog. She takes food out of your hand gently and likes to give little kisses, she still likes to run and play as if she was a puppy. Once she gets to know someone, she becomes less shy and more affectionate. She enjoys staying by a person's side.",
                "age":"1 year",
                "sex":"Female",
                "image":{
                   "_url":"https://images.unsplash.com/photo-1605559141066-1549783d18e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=250",
                   "size":123
                },
                "breed":"Husky",
                "category":"dog"
            }
        ];

        const {container} = render(<BrowserRouter><CategoryListItem category={category} posts={posts} /></BrowserRouter>);

        expect(container).toMatchSnapshot();
    });

})