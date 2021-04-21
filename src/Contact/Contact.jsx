import React from 'react';
import NavBar from "../NavBar/NavBar";
import styles from "./Contact.module.css";


const Contact = () => {
    return(
        <div>
            <div>
                <NavBar />
            </div>

            <div className={styles.container}>
                    <h2 className={styles.contactTitle}>Contact now to get more info:</h2>
                    <div className={styles.contactContent}>
                        <address>
                            <a href="mailto:zhou.yue2@northeastern.com" className={styles.link}>PURR PET</a><br/>
                            Written by Yue Zhou<br/>
                            Call us: +1-(206)-636-9951<br/>
                            Visit us at:<br/>
                            2442 8th Ave N<br/>
                            Washingtong<br/>
                            USA
                        </address>
                    </div>
                </div>
        </div>
    );

}

export default Contact;