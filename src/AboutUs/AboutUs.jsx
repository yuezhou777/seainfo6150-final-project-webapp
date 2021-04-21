import React from 'react';
import NavBar from "../NavBar/NavBar";
import AboutUsImg from "../images/AboutUsPage/aboutus.jpeg";

import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return(
        <div className={styles.container}>
            <div>
                <NavBar />
            </div>

            <div className={styles.board}>
                <div className={styles.aboutUsText}>
                    <h2 className={styles.aboutUsTitle}>About Us</h2>
                    <div className={styles.aboutUsContent}>
                        <p>We are people helping cats, dogs and wild animals go home and thrive. 
                            We do this by sheltering and adopting homeless cats and dogs, 
                            and educating the community to inspire compassionate action for animals.
                        </p>
                    </div>
                </div>
                <div>
                    <img className={styles.aboutUsImg} src={AboutUsImg} alt="About us image: a person hugs a dog"/>
                </div>
            </div>
        </div>
    );

}

export default AboutUs;