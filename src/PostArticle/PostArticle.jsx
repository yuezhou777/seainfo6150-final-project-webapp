import React, { useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import HTMLText from "../HTMLText/HTMLText";
import Form from '../Form/Form.jsx';
import styles from './PostArticle.module.css';

const PostArticle = (props) => {

    const posts = props.posts;
    const postId = props.postId;
    const targetPost = posts.filter(post => post.id === postId)[0];

    const[buttonText, setButtonText] = useState("Adopt Now");

    function onClick() {
        buttonText === "Adopt Now" ? setButtonText("Consider Again") : setButtonText("Adopt Now")
    }

    let loadContent = null;
    if (buttonText === "Consider Again") {
        loadContent = (
            <div>
                <Form />
            </div>
        )
    } else {
        loadContent = (
            <div className={styles.content}>
                <h2>{targetPost.title}</h2>
                <h3>{targetPost.age} - {targetPost.sex}</h3>
                <HTMLText content={targetPost.content} />
            </div>  
        )
    }

    return(

        <div>
            <div>
                <NavBar />
            </div>

            <div className={styles.board}>
                <div className={styles.title}>
                    <div className={styles.postImg}>
                        <img src={targetPost.image._url} alt={targetPost.title} />
                    </div>
                </div>

                {loadContent}

                <ArticleTextToggleButton onClick = {onClick} buttonText = {buttonText}/>
            </div>
        </div>

    );

}

export default PostArticle;