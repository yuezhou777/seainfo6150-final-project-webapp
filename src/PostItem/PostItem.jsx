import React from 'react';
import styles from './PostItem.module.css';
import { Link } from "react-router-dom";

const PostItem = (props) => {

    return(

        <div className={styles.container}>
            <div className={styles.postText}>
                <h3><Link to={'/posts/'+props.post.id} className={styles.link}>{props.post.title}</Link></h3>
                <p>{props.post.age} - {props.post.sex}</p>
            </div>

            <div className={styles.postImg}>
                <img src={props.post.image._url} alt={props.post.image.img_text}/>
            </div>
        </div>

    );

}

export default PostItem;