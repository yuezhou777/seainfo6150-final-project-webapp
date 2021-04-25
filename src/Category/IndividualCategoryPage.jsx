import React from 'react';
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

import styles from './IndividualCategoryPage.module.css';

const IndividualCategoryPage = (props) => {

    const category = props.category;
    const posts = props.posts

    return(

        <div>

            <div>
                <NavBar />
            </div>

            <div className={styles.container}>
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
                                <div>
                                    <img src={post.image._url} alt={post.image.img_text}/>
                                </div>
                            </div>
                        ))
                    }
                </ul>
            </div>

        </div>

    );

}

export default IndividualCategoryPage;