import React from 'react';
import {Link} from "react-router-dom";
import styles from './CategoryList.module.css';

const CategoryList = (props) => {

    return(
        <div className={styles.container}>
            <h3 className={styles.categoryTitle}>All Pet Categories</h3>

            <ul className={styles.listContainer}>
                {props.breeds.map(breed => (
                    <h4 key={breed}><Link to={'/category/'+breed} className={styles.category}>{breed}</Link></h4>
                ))}
            </ul>

        </div>


    );

    
}

export default CategoryList;