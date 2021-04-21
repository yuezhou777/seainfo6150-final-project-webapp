import React from 'react';
import {Link} from "react-router-dom";
import HTMLText from "../HTMLText/HTMLText";
import styles from './CategoryListItem.module.css';

const CategoryListItem = (props) => {

    const category = props.breed;
    const posts = props.posts

    return(

        <div>

            <div className={styles.listContainer}>
                <h1>{category}</h1>

                <ul>
                    {posts
                        .filter(post => post.breed === category)
                        .map(post => (
                            <div className={styles.postContainer}>
                                {/*<h2><a href={'/seainfo6150-final-project-webapp/posts/:'+post.id}>{post.title}</a></h2>*/}
                                {/*<h2 className={styles.postTitle}><a href={'/seainfo6150-final-project-webapp/posts/'+post.id}>{post.title}</a></h2>*/}
                                <h2 className={styles.postTitle}>
                                    <Link to={'/posts/'+post.id}>{post.title}</Link>
                                </h2>

                                <p>{post.age} - {post.sex}</p>

                                <div>
                                <HTMLText content={post.intro} />
                                </div>
                            </div>
                        ))

                    }
                </ul>
            </div>

        </div>

    );

}

export default CategoryListItem;