import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './SearchItems.module.scss';
const SearchItems = ({imageUrl, name, type, price}) =>{
    return (
        <Col className={styles.col} xs={6} sm={4} md={3} lg={2}>
            <div className={styles['product__item']}>
                <div className={styles.image}>
                    <img src={imageUrl} alt=''/>
                </div>
                <div className={styles.information}>
                    <p className={styles.name}><Link to='/'>{name}</Link></p>
                    <p className={styles.type}>Type: {type}</p>
                    <p>${price}</p>
                </div>
            </div>
        </Col>
    )
}

export default SearchItems;