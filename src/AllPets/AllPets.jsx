import React from 'react';
import NavBar from "../NavBar/NavBar";
import PostItem from "../PostItem/PostItem";
import styles from "./AllPets.module.css";

const AllPets = (props) => {

    let displayContent;

    if (props.posts.length) {
        displayContent = (
            <ul className={styles.postList}>
                {props.posts.map((post) => (
                    <PostItem post={post} key={post.id} />
                ))}
            </ul>
        );
    } else {
        displayContent = <div>You have no data!</div>;
    }

    return(
        <div className={styles.container}>
            <div>
                <NavBar />
            </div>

            <div className={styles.board}>
                <div className={styles.postBoard}>
                    {displayContent}
                </div>
            </div>

        </div>

    );

}

export default AllPets;

