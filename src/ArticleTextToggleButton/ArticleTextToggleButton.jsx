import React from "react";
import style from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
    return (
        <button className={style.button} onClick={props.onClick}>{props.buttonText}</button>
    )
}

export default ArticleTextToggleButton;