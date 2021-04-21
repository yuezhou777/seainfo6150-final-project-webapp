import React from 'react';
import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

const NavBar = () => {

    return(
        <div className={styles.navContainer}>
            <header className={styles.navContainer}>
                <nav>
                    <Link to="/" className={styles.navIcon}>PurrPet</Link>
                </nav>

                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/aboutus" className={styles.link}>About Us</Link>
                        </li>

                        <li className={styles.navItem}>
                            <Link to="/allpets" className={styles.link}>All Pets</Link>
                        </li>
                    
                        <li className={styles.navItem}>
                            <Link to="/category" className={styles.link}>Categories</Link>
                        </li>

                        <li className={styles.navItem}>
                            <Link to="/contactus" className={styles.link}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );

}

export default NavBar;