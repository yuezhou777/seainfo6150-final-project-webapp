import React from 'react';
import { Link } from "react-router-dom";
import error from "../images/ErrorPage/error.jpg";
import NavBar from "../NavBar/NavBar";
import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.container}>
          <div>
            <NavBar/>
          </div>
          <div>
            <img src={error} className={styles.errorImg} alt="404 Not Found" />
          </div>
          <div>
            <Link to="/" className={styles.link}>Back To Main</Link>
          </div>
        </div>
    )
}

export default Error
