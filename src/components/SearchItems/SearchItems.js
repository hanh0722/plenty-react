import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './SearchItems.module.scss';
const SearchItems = () =>{
    return (
        <Col xs={6} sm={6} md={3} lg={2}>
            <div className={styles['product__item']}>
                <div className={styles.image}>
                    <img src={require('../image/indoor-1.jpeg').default} alt=''/>
                </div>
                <div className={styles.information}>
                    <Link to='/'>Items!</Link>
                    <p className={styles.type}>Type: Indoor</p>
                    <p>$24.00</p>
                </div>
            </div>
        </Col>
    )
}

export default SearchItems;