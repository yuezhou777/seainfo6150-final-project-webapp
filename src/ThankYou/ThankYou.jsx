import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ThankYouImg from '../images/ThankYouPage/thank-you.jpeg';
import styles from "./ThankYou.module.css";


const ThankYou = () => {
    return(
        <div>
            <div>
                <NavBar />
            </div>

            <div className={styles.container}>
                    <h2 className={styles.contactTitle}>Thank you for adopting!</h2>
                    <div className={styles.contactContent}>
                        <h3>We will contact you soon about the following process.</h3>
                    </div>
                    <div>
                        <img src={ThankYouImg} alt="Thank you image: a smiling dog"/>
                    </div>
                    <div>
                        <Link to="/" className={styles.link}>Back To Main</Link>
                    </div>
                </div>
        </div>
    );

}

export default ThankYou;