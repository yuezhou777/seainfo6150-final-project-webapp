import React from 'react';
import NavBar from "../NavBar/NavBar";
import styles from './CategoryPage.module.css';
import CategoryList from "../CategoryList/CategoryList";

const CategoryPage = (props) => {

    const allCategory = new Set();

    if (props.posts.length) {
        props.posts.map(post => (
            allCategory.add(post.breed)
        ))
    }

    let categoryList = [];
    allCategory.forEach((key, value) => (
        categoryList.push(value)
    ))

    return(

        <div>

            <div>
                <NavBar />
            </div>

            <div className={styles.categoryBoard}>
                <CategoryList breeds={categoryList} posts={props.posts} />
            </div> 

        </div>

    );

}

export default CategoryPage;