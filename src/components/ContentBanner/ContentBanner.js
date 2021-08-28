import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import styles from './ContentBanner.module.scss'
const ContentBanner = () =>{
    return(
        <Col className={styles.text} xs={12} sm={12} md={6} lg={6}>
            <p><span>HOT</span> 25% off everything (yes, everything!) 🔥</p>
            <h2>Why plants make you happy</h2>
            <p><Link to='/'>Shop Collection</Link></p>
        </Col>
    )
}

export default ContentBanner;