import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import homeImg from "../images/HomePage/home.jpeg";
import styles from "./HomePage.module.css";

const HomePage = (props) => {

    const posts = props.posts

    let displayContentDog;
    let displayContentCat;

    if (posts.length) {
        displayContentDog = (
            <ul className={styles.postList}>
                {posts
                .filter(post => post.category === "dog")
                .map((post) => (
                    <Link to={'/posts/'+post.id}>{post.title}</Link>
                ))}
            </ul>
        );
    } else {
        displayContentDog = <div>You have no data!</div>;
    }

    if (posts.length) {
        displayContentCat = (
            <ul className={styles.postList}>
                {posts
                .filter(post => post.category === "cat")
                .map((post) => (
                    <Link to={'/posts/'+post.id}>{post.title}</Link>
                ))}
            </ul>
        );
    } else {
        displayContentCat = <div>You have no data!</div>;
    }

    return(
        <div className={styles.container}>
            <div>
                <NavBar />
            </div>

            <div className={styles.board}>
                <div className={styles.homeText}>
                    <h2 className={styles.homeTitle}>Now Might Be the Best Time to Adopt a Pet</h2>
                    <div className={styles.homeContent}>
                        <p>Animal shelters and rescue groups are brimming with happy, 
                            healthy pets just waiting for someone to take them home. 
                            When you adopt, you save a loving animal by making them part of your family
                            and get a new best friend out of the deal!
                        </p>
                    </div>

                    <h2 className={styles.homeTitle}>Check below for avaliable pets! </h2>
                    <div className={styles.btnContainer}>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>+ Dogs avaliable for adoption </button>
                            <div className={styles.dropdownContent}>
                                {displayContentDog}
                            </div>
                        </div>
                        <div className={styles.dropdown}>
                            <button className={styles.dropbtn}>+ Cats avaliable for adoption </button>
                            <div className={styles.dropdownContent}>
                                {displayContentCat}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img className={styles.homeImg} src={homeImg} alt="Home page image:  human and pets get along well"/>
                </div>
            </div>
        </div>
    );

}

export default HomePage;